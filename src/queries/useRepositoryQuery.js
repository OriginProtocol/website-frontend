import { useQuery } from "react-query";

import { QUERY_KEYS } from "constants/queryKeys";

import { repositoryService } from "../services/repository.service";

const useRepositoryQuery = (options) => {
  return useQuery(
    QUERY_KEYS.Repository(),
    () => repositoryService.fetchRepository(),
    options
  );
};

export default useRepositoryQuery;
