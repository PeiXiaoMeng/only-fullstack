'use client';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setColor } from '../redux/colorSlice';
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import TableComponent from '@/components/TableComponent';
import styles from "./page.module.css";

const COLORS = [
  { name: '橙色', value: '#FFA500' },
  { name: '绿色', value: '#4CAF50' },
  { name: '浅蓝', value: '#42A5F5' },
  { name: '灰色', value: '#9E9E9E' },
  { name: '黑色', value: '#222' },
];

export default function Home() {
  const [dateTime, setDateTime] = useState(new Date());
  const color = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 48px',
          borderBottom: '1px solid #ddd',
          width: '100%',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 60,
              height: 60,
              background: '#e0e0e0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 24,
              color: '#888',
            }}
          >
            LOGO
          </div>
          <span style={{ fontWeight: 700, fontSize: 28, color: '#333' }}>Only Fullstack</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* <span style={{ fontSize: 18, color: '#666' }}>
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </span> */}
          <Drawer direction='right'>
            <DrawerTrigger asChild>
              <button
                className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                style={{ background: color }}
                aria-label="选择主题色"
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="h-24 p-8 border-b border-gray-200 flex flex-col items-center justify-center">
                <DrawerTitle className="text-3xl font-bold text-gray-800 text-center">
                  选择您的主题色
                </DrawerTitle>
              </DrawerHeader>
              <div
                className="grid w-96 grid-cols-5 gap-8 justify-center items-center !px-6 !mt-12"
              >
                {COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => dispatch(setColor(c.value))}
                    className={`w-12 h-12 rounded-full border-2 ${
                      color === c.value ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ background: c.value }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>

      {/* 引入表格组件 */}
      <TableComponent />
    </div>
  );
}
