import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSelect = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectclass = [] } = useQuery({
    queryKey: ["selectclass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectclass?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectclass, refetch];
};

export default useSelect;
