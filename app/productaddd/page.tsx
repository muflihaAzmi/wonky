"use client";

import { Upload } from "lucide-react";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function ProductAdd() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [colorName, setColorName] = useState("");

  const addProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
        name: productName,
        price: Number(price),
        description,
        color: colorName,
        createdAt: new Date(),
      });

      alert("Product added successfully!");

      // reset form
      setProductName("");
      setPrice("");
      setDescription("");
      setColorName("");
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="py-10 min-h-screen w-full">
      <div className="flex px-24 justify-between">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[18px] text-[#6D6D6D]">product</h1>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-[300px] border p-2"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="text"
              className="w-[300px] border p-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              className="w-[300px] border p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[18px] text-[#6D6D6D]">colours</h1>

          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Colour name
              </label>
              <input
                type="text"
                className="w-[300px] border p-2"
                value={colorName}
                onChange={(e) => setColorName(e.target.value)}
              />
            </div>
          </div>

          <input type="file" id="fileUpload" hidden />

          <label
            htmlFor="fileUpload"
            className="w-20 h-10 border-2 border-dashed border-orange-300
            rounded-lg flex items-center justify-center gap-1
            cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors"
          >
            <Upload className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500 font-medium">Upload</span>
          </label>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-5 mt-10">
        <button className="bg-gray-200 w-28 p-2 rounded">
          Cancel
        </button>

        <button
          onClick={addProduct}
          className="bg-orange-500 w-28 p-2 rounded text-white font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProductAdd;
