export const generateMockData = (totalItems: number) => {
  const mockData = [];
  for (let i = 1; i <= totalItems; i++) {
    mockData.push({
      id: i,
      schoolName: `学校 ${i}`,
      openTime: `${8 + (i % 5)}:00 - ${18 - (i % 3)}:00`, // 动态生成开放时间
      bookingMethod: i % 3 === 0 ? '官网预约' : i % 3 === 1 ? '电话预约' : '现场预约', // 动态生成预约方式
    });
  }
  return mockData;
};

// 导出模拟数据
export const mockData = generateMockData(50); // 生成 50 条数据