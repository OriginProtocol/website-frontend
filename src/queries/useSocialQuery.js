import { useQuery } from "react-query";

import { QUERY_KEYS } from "constants/queryKeys";

import { socialService } from "../services/social.service";

const useSocialQuery = (options) => {
  return useQuery(
    QUERY_KEYS.Social(),
    () => socialService.fetchSocial(),
    options
  );
};

export default useSocialQuery;
