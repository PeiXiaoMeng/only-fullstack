'use client';

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockData } from '@/mock'; // 导入模拟数据

export default function TableComponent() {
  const [data, setData] = useState([]); // 表格数据
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [totalPages, setTotalPages] = useState(1); // 总页数
  const itemsPerPage = 10; // 每页显示的条数
  const primaryColor = '#FFA500'; // 主色调橙色

  // 获取分页数据
  const fetchData = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const pageData: any = mockData.slice(startIndex, endIndex); // 分页数据
    setData(pageData);
    setTotalPages(Math.ceil(mockData.length / itemsPerPage)); // 计算总页数
  };

  // 初始化加载数据
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // 切换到上一页
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 切换到下一页
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="!p-12 flex flex-col items-center">
      {/* 表格部分 */}
      <div className="w-full max-w-5xl border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <Table className="min-h-[560px]">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead
                className="px-6 !py-6 text-center font-semibold text-lg"
                style={{ color: primaryColor }}
              >
                学校名称
              </TableHead>
              <TableHead
                className="px-6 !py-6 text-center font-semibold text-lg"
                style={{ color: primaryColor }}
              >
                开放时间
              </TableHead>
              <TableHead
                className="px-6 !py-6 text-center font-semibold text-lg"
                style={{ color: primaryColor }}
              >
                预约方式
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: any) => (
              <TableRow
                key={item.id}
                className={`hover:bg-orange-100 ${
                  item.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <TableCell className="px-6 py-6 text-center text-gray-800 text-base">
                  {item.schoolName}
                </TableCell>
                <TableCell className="px-6 py-6 text-center text-gray-800 text-base">
                  {item.openTime}
                </TableCell>
                <TableCell className="px-6 py-6 text-center text-gray-800 text-base">
                  {item.bookingMethod}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 分页按钮 */}
      <div className="flex items-center gap-4 !mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`!px-6 !py-2 rounded-lg border shadow-md transition-all ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          上一页
        </button>
        <span className="text-gray-700 font-medium">
          第 {currentPage} 页，共 {totalPages} 页
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`!px-6 !py-2 rounded-lg border shadow-md transition-all ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          下一页
        </button>
      </div>
    </div>
  );
}