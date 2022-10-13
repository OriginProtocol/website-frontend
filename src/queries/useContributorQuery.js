import { useQuery } from "react-query";

import { QUERY_KEYS } from "constants/queryKeys";

import { contributorService } from "../services/contributor.service";

const useContributorQuery = (repositories, options) => {
  return useQuery(
    QUERY_KEYS.Contributor(repositories),
    () => contributorService.fetchContributor(repositories),
    options
  );
};

export default useContributorQuery;
