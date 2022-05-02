import http from "../../services/general/httpService";
import apiEndpoint from "../../constants/config.json";

export function fetchAllStoreItems() {
	const fullApiEndpoint = apiEndpoint.apiEndpoint + "/find_all_store_items";
	return http.get(fullApiEndpoint);
}
