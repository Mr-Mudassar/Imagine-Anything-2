"use client"
import React, { useState } from 'react';
import ImagesTab from './tabs/images-tab/page';
import CategoriesTab from './tabs/categories-tab/page';
import { useStore } from '@/store';

const tabData = [
  { tabKey: 1, tabText: 'Images', content: <ImagesTab /> },
  { tabKey: 2, tabText: 'Categories', content: <CategoriesTab /> },
];

export default function ImageCategories() {
  const [activeTab, setActiveTab] = useState(1);
  const userData = useStore((state) => state.userData)
  console.log("userData", userData)

  const renderContent = (tabKey: any) => {
    const tabInfo = tabData.find((tab) => tab.tabKey === tabKey);
    return tabInfo ? <h1>{tabInfo.content}</h1> : <h1>No Tabs found</h1>;
  };
  return (
    <div>
      <div className='grid grid-cols-[100px_100px] px-10 items-center border-b border-gray-600 text-center pt-5 text-white '>
        {tabData.map((tabInfo) => (
            <div
              key={tabInfo.tabKey}
              className={`${activeTab === tabInfo.tabKey ? 'transition-all duration-800 delay-100 text-yellow font-bold tab-gradient border-b-4 border-yellow' : ''
                } cursor-pointer w-full text-base lg:text-xl py-2`}
              onClick={() => setActiveTab(tabInfo.tabKey)}>
              {tabInfo.tabText}
            </div>
        ))}
      </div>
      <div className='relative py-5 px-3 md:px-10'>{renderContent(activeTab)}</div>
    </div>
  );
}
