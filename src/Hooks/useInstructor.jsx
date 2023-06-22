import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    data: instructor = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://musical-summer-camp-server.vercel.app/users"
      );
      return res.json();
    },
  });

  return [instructor, refetch, loading];
};

export default useInstructor;
