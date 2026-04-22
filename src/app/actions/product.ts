"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const isSustainable = formData.get("isSustainable") === "on";

  await prisma.product.create({
    data: {
      name,
      price,
      description,
      imageUrl,
      isSustainable,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}
