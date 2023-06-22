import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useFeedback = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: feedback = [] } = useQuery({
    queryKey: ["feedback", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/feedback?email=${user?.email}`);
      return res.data;
    },
  });
  return [feedback, refetch];
};

export default useFeedback;
