const App = () => {
  interface Profile {
    name: string;
    age: number;
    occupation: string;
    hobbies: string[];
  }
  const profile: Profile = {
    name: "加藤貴也",
    age: 19,
    occupation: "学生",
    hobbies: ["プログラミング", "アニメ鑑賞", "鉱物収集"],
  };

  return (
    <div className="container">
      <h1>自己紹介</h1>
      <div className="profile">
        <h2>プロフィール</h2>
        <p>名前: {profile.name}</p>
        <p>年齢: {profile.age}</p>
        <p>職業: {profile.occupation}</p>
        <h3>趣味</h3>
        <ul>
          {profile.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
