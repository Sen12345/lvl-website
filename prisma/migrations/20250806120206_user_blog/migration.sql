-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "headline" TEXT NOT NULL,
    "paragraph1" TEXT NOT NULL,
    "paragraph2" TEXT,
    "bloglinks" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
