import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://musical-summer-camp-server.vercel.app/classes"
      );
      return res.json();
    },
  });

  return [classes, refetch, loading];
};

export default useClasses;
