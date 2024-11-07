import Star from "@/components/atoms/star/star";

export default function SkyOfStars() {

  const calculateStarsPositions = async () => {
    const starsPositions = [];
    for (let i = 0; i < 100; i++) {
      starsPositions.push({
        topPosition: `${Math.floor(Math.random() * 100)}%`,
        leftPosition: `${Math.floor(Math.random() * 100)}%`,
      });
    }
    return starsPositions;
  };

  const arrayOfStars = async () => {
    const starsPositions = await calculateStarsPositions();
    return starsPositions.map((star) => {
      const uniqueKey = `${Date.now()}-${Math.random()}`;
      return <Star key={uniqueKey} topPosition={star.topPosition} leftPosition={star.leftPosition} />;
    });
  }

  //TODO: Fix mon implémentation de la génération des étoiles, parce que c'est pas comme ça que je suis censé faire avec du SSR

  return (
    <div>
      {arrayOfStars()}
    </div>
  );
}