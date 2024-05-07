import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const LoggedIn = {firstname: 'Didier', lastname: 'Toh', email: 'techwithdidier@gmailcom', userName: 'Lewang'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title= "Welcome"
          user= {LoggedIn?.firstname || 'Guest'}
          subtext="Access and Manage your Account and transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={LoggedIn}
      transactions ={[]}
      banks ={[{ currentBalance: 123.50},{currentBalance: 500.50}]}
      
      />
    </section>
  )
}

export default Home