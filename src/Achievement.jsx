export default function Achievement({ achievements }) {
  return (
    <div>
      {achievements.map((achievement, index) => (
        <div key={index}>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <span>{achievement.rank}</span>
          <button>Delete</button>
          <button>Complete</button>
        </div>
      ))}
    </div>
  );
}
