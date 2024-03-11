import React from 'react';
import '../Components/DashBoardCard.css';
import { useState,useEffect } from 'react';


export default function CardAdminDashboard() {

  const [DynamicComponent, setDynamicComponent] = useState(null);


  const title=sessionStorage.getItem('pageContext')
  
  
  useEffect(() => {
    const importComponent = async () => { 
      try {
        const module = await import(`../table/${title}`);
        setDynamicComponent(() => module.default);
        
      } catch (error) {
        console.error(`Error importing component: ${error}`);
      }
    };

    importComponent();
  }, [title]);

 if (!DynamicComponent) {
  return <div>Error loading {title} component</div>;
}

  return (
    <div className="cardD">
      <React.Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent/>
      </React.Suspense>
    </div>
  );
}