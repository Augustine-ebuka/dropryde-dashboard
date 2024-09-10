import styled from 'styled-components';
// Interfaces
export interface SubscriptionPlan {
    id: string;
    name: string;
    duration: number;
    cost: number;
    benefits: string[];
  }
  
  export interface AnalyticsData {
    totalSubscribers: number;
    monthlyRevenue: number;
    popularPlan: string;
  }
  
  // Styled Components
  export const ScreenContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  `;
  
  export const Header = styled.h1`
    color: #333;
    text-align: center;
  `;
  
  export const Section = styled.section`
    margin-bottom: 30px;
  `;
  
 export const SectionTitle = styled.h2`
    color: #444;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  `;
  
  export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  `;
  
  export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
  `;
  
  export const Th = styled.th`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  `;
  
  export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 12px;
  `;
  
  export const AnalyticsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  `;
  
 export  const AnalyticsCard = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    width: 30%;
    text-align: center;
  `;
  
  export const AnalyticsValue = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
  `;
  