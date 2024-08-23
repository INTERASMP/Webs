<?php

$url = 'https://api.mcstatus.io/v2/status/bedrock/interasmp.ddns.net:25602';
$response = file_get_contents($url);
$data = json_decode($response, true);

$serverInfo = [];

if ($data) {
    $serverInfo['status'] = $data['online'] ? 'online' : 'offline';
    $serverInfo['players_online'] = $data['players']['online'] ?? 0;
} else {
    $serverInfo['status'] = 'Error fetching data';
    $serverInfo['players_online'] = 0;
}

// Return the data as a JSON response
echo json_encode($serverInfo);
