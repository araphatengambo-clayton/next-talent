interface PlayerCardProps {
  name: string;
  position: string;
  age: number;
  location: string;
}

export default function PlayerCard({
  name,
  position,
  age,
  location,
}: PlayerCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Poste : {position}</p>
      <p>Âge : {age} ans</p>
      <p>Localisation : {location}</p>
    </article>
  );
}
