'use client';

import { UploadButton } from '@/utils/uploadthing';
import React from 'react';

interface ImageUploadProps {
  setCoverImg: (url: string) => void; // Prop to set cover image URL
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setCoverImg }) => {

  return (
    <div>
      <UploadButton endpoint='imageUploader' onClientUploadComplete={(res) => {
        // Do something with the response
        setCoverImg(res[0].url)
        alert("Upload Completed");
      }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }} />
    </div>
  );
}

export default ImageUpload;
