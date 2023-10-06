import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
   userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: {
          connect: { email: userEmail },
        },
      },
    });
    res.send({message: "Residency created successfully", residency})
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with address already there");
    }
    throw new Error(err.message);
  }
});

//function to get all the documents

export const getAllResidencies = asyncHandler(async(req, res)=>{
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  res.send(residencies)
})

//function to get a specific document/residency