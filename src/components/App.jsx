import React from "react";
import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friend/friendList";
import {TransactionHistory} from "./transactions/transactionHistory"
import  user  from "../user";
import data from "../data"
import friends from '../friends';
import transactions from "../transactions";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions}/>
    </>
  );
};
