/*
VUE Vlog 解锁高级功能 (需登录)
***************************
QuantumultX:
[rewrite_local]
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/NoByDa/Js/VUE.js
[mitm]
hostname = api.vuevideo.net
***************************
Surge4 or Loon:
[Script]
http-response https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/PF2022/Peng-Lx/master/Script/Surge/NoByDa/Js/VUE.js
[MITM]
hostname = api.vuevideo.net
**************************/
var body = $response.body
    .replace(/\"isPremium\":false/, "\"isPremium\":true")
    .replace(/\"valid\":false/, "\"valid\":true");
$done({ body });
