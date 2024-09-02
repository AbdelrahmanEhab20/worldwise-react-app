// import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  //   const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [ lat, lng ];
}
