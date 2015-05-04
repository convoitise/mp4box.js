var sampleUrls = [
	{ url: "./mp4/h264bl.mp4", desc: "Video Counter (10min, unfragmented, AVC Baseline)"},
	{ url: "./mp4/a.mp4", desc: "Video Counter (10min, fragmented, AVC Baseline)"},
	{ url: "./mp4/aaclow.mp4", desc: "Audio Bips (10 min, unfragmented, AAC)"},
	{ url: "./mp4/avw.mp4", desc: "Multiplexed Audio/Video/Subtitle (unfragmented, AVC+AAC+WebVTT)"},
	{ url: "./mp4/2v.mp4", desc: "2 videos (unfragmented, AVC+AVC)"},
	{ url: "./mp4/text/text-all.mp4", desc: "All text formats (unfragmented)"},
	{ url: "./mp4/bbb_sunflower_1080p_30fps_normal.mp4", desc: "Big Buck Bunny (10 min, unfragmented, AVC+AAC+AC3, 263 MB)"},
	{ url: "./mp4/Bad.Influence.se4ep13.mp4", desc: "Bad Influence (S04E13 from Archive.org, 20 min, unfragmented, AVC+AAC, 117MB)"},
	{ url: "./mp4/Bad.Influence.se4ep13.video.flat.mp4", desc: "Bad Influence (video only, flat storage)"},
	{ url: "./mp4/Bad.Influence.se4ep13.flat.mp4", desc: "Bad Influence (A/V flat storage)"},
	{ url: "http://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-onDemand/mp4-onDemand-aaclc_high.mp4", desc: "DASH onDemand audio (fragmented, AAC High)"},
	{ url: "http://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-onDemand/mp4-onDemand-aaclc_low.mp4", desc: "DASH onDemand audio (fragmented, AAC Low)"},
	{ url: "http://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-onDemand/mp4-onDemand-h264bl_full.mp4", desc: "DASH onDemand video (fragmented, H.264/AVC Baseline Full HD)"},
	{ url: "http://download.tsi.telecom-paristech.fr/gpac/DASH_CONFORMANCE/TelecomParisTech/mp4-onDemand/mp4-onDemand-h264bl_low.mp4", desc: "DASH onDemand video (fragmented, H.264/AVC Baseline Low Resolution)"},
	{ url: "https://a0.muscache.com/airbnb/static/Paris-P1-1.mp4", desc: "AirBnB Paris video"},
	{ url: "http://hubimg.com/x/vid/homepage_v03.mp4", desc: "HubPages video"},
	{ url: "http://v.theonion.com/onionmedia/videos/videometa/2002/zen_mp4.mp4", desc: "The Onion video"},
	{ url: "http://content.jwplatform.com/videos/HkauGhRi-640.mp4", desc: "JWPlayer video"},
	{ url: "./mp4-torrents/g.mp4", desc: "Gravity v1 (1h30, unfragmented, AVC video only, 3.28 GB)"},
	{ url: "./mp4-torrents/Gravity%202013.mp4", desc: "Gravity v1 (1h30, unfragmented, AVC+AAC, 3.48 GB)"},
	{ url: "./mp4-torrents/Gravity.mp4", desc: "Gravity v2 (1h30, unfragmented, AVC+AAC+AC3, 2.72 GB)"},
	{ url: "./mp4-torrents/Iron%20Man%202008.720p.BrRip.x264.YIFY.mp4", desc: "Iron Man (2h06, unfragmented, AVC+AAC, 749 MB)"},
	{ url: "./mp4-torrents/Iron.man.2DAZA.mp4", desc: "Iron Man 2 (2h, unfragmented, AVC+AAC+AC3, 1.5 GB)"},
	{ url: "./mp4-torrents/Iron.Man.3.2013.720p.BluRay.x264.YIFY.mp4", desc: "Iron Man 3 (2h10, unfragmented, AVC+AAC, 925 MB)"},
	{ url: "./mp4-torrents/the%20wolf%20of%20wall%20street%20esp%20castellano%20dvds%202013.MP4", desc: "The Wolf of Wall Street v1 (3h, unfragmented, AVC+AAC(esp),1.02 GB)"},
	{ url: "./mp4-torrents/The%20Wolf%20of%20Wall%20Street.mp4", desc: "The Wolf of Wall Street v2 (3h, unfragmented, AVC+AAC+AC3, 7.08 GB)"},
	{ url: "./mp4-torrents/WolfVideo.mp4", desc: "The Wolf of Wall Street v2 (3h, fragmented, AVC only, 6.14 GB)"},
];