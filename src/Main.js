import React, { useState } from "react";

const initState = [
  { id: 1, username: "알라딘" },
  { id: 2, username: "지니" },
  { id: 3, username: "홍길동" },
  { id: 4, username: "임꺽정" },
  { id: 5, username: "미키마우스" },
];

const Main = () => {
  // 필터 기본 사용법
  // const numbers = [1,2,3,4,5];
  // const bigger = numbers.filter(num => num > 3);
  // console.log(bigger); // 4,5만 나옴

  // const remove = numbers.filter(num => num != 3);
  // console.log(remove); // 1,2,4,5 나옴

  // member 목록 상태
  const [members, setMembers] = useState(initState);
  // id 상태
  const [nextId, setNextId] = useState(6);
  // input 상태
  const [username, setUsername] = useState("");

  // input 이벤트 핸들러
  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    //배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열로 만든다.
    const nextMembers = members.concat({
      id: nextId,
      username: username,
    });
    setNextId(nextId + 1);
    setMembers(nextMembers);
    setUsername("");
  };

  // remove 이벤트 핸들러
  const onRemove = id => {
    //내가 더블 클릭한 요소와 같지 않은 요소만 남겨라 (더블 클릭한것만 없애라)
    const nextMembers = members.filter(member => member.id !== id);
    setMembers(nextMembers);
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>

      <ul>
        {members.map(member => (
          <li key={member.id} onDoubleClick={() => onRemove(member.id)}>
            {member.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
