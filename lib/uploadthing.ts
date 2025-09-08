import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// src/app/api/uploadthing/route.ts
export const runtime = "nodejs";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
