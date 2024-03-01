import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PriceTable = ({ priceData, isSMP }) => {
  return (
    <div className="my-20">
      <Table>
        <TableCaption className="my-10 text-gray-600 text-base lg:text-sm">
          <em>
            *Prices are subject to change depending on your specific situation.
          </em>
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow>
            {priceData.headers.map((header, index) => (
              <TableHead
                className={`${header === "Price" ? "text-right" : ""}`}
                key={index}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {priceData.rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="flex font-medium lg:text-sm text-lg">
                <div className={isSMP ? "w-10 h-10 mr-5" : ""}>
                  <img src={row.img} alt={row.area} />
                </div>
                <div className="flex">{isSMP ? row.area : row.session}</div>
              </TableCell>
              <TableCell className="lg:text-sm text-lg">
                {isSMP ? row.sessions : row.extraInfo}
              </TableCell>
              <TableCell className="text-right w-[300px]">
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PriceTable;
