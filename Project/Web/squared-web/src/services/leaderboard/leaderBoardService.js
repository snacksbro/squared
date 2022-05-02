import http from "../../services/general/httpService";
import apiEndpoint from "../../constants/config.json";

export function fetchTopThreePlayers() {
	const fullApiEndpoint = apiEndpoint.apiEndpoint + "/find_top_three_players";
	return http.get(fullApiEndpoint);
}

export function fetchOtherTopPlayers() {
	const fullApiEndpoint = apiEndpoint.apiEndpoint + "/find_other_top_players";
	return http.get(fullApiEndpoint);
}
