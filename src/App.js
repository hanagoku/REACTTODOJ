import "./styles.css";
import React, { useState } from "react";
export const App = () => {
  const [incompleteTODOS, setincompleteTODOS] = useState([
    `おいおいおい`,
    `うううううう`
  ]);
  const [completeTODOS, setCompleteTODOS] = useState(["おいおいおい"]);
  <>
    <div className="input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTODOS.map((TODO) => {
          return (
            <div key={TODO} className="list-row">
              <li>{TODO}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTODOS.map((TODO) => {
          return (
            <div key={TODO} className="list-row">
              <li>{TODO}</li>
              <button>戻す</button>
            </div>
            );
            })}
            </ul>
            </>
}