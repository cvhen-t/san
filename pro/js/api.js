        // 电影api数据请求
			let a='channel_id=2&data_type=1&mode=24&page_id=2&ret_num=48&session=f7ad986eaafbf0a852ebaf82fdb88396&three_category_id=24063;must'
			let b='channel_id=6&data_type=1&mode=24&page_id=3&ret_num=48&session=75cd981e467d17301e8f7ccabb62c6d1'
			let c='channel_id=2&data_type=1&mode=24&page_id=1&ret_num=48&three_category_id=20;must'
			let d='channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48&three_category_id=289;must'
			let e='channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48&three_category_id=8;must'

			let f='channel_id=4&data_type=1&mode=24&page_id=2&ret_num=48&session=ec6d9823e3c28a6439ce2cbecbbf3107&three_category_id=32784;must'
			let i='channel_id=4&data_type=1&mode=24&page_id=2&ret_num=48&session=c69d98c2b82d0b226dd631178f8a5e60&three_category_id=30223;must'
			let g='channel_id=1&data_type=1&mode=24&page_id=2&ret_num=48&session=72dd980a90d57371eb9b3ca08be392bb&three_category_id=2;must,9;must'
			let h='business_type=6&channel_id=12&data_type=1&mode=24&page_id=2&ret_num=48&session=11cd9812330e023eab2dc15d1413b06a&three_category_id=32641;must,32854;must'

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=24&page_id=2&ret_num=48&session=f7ad986eaafbf0a852ebaf82fdb88396&three_category_id=24063;must剧情

			// https://pcw-api.iqiyi.com/search/recommend/list?business_type=6&channel_id=12&data_type=1&mode=24&page_id=2&ret_num=48&session=11cd9812330e023eab2dc15d1413b06a&three_category_id=32641;must,32854;must 大人
			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=28&data_type=2&mode=24&page_id=2&ret_num=48&session=39dd98910c46fb6b8205cd436ce40f11  军事

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&data_type=1&mode=24&page_id=2&ret_num=48&session=c69d98c2b82d0b226dd631178f8a5e60&three_category_id=30223;must 奥特曼

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=3&ret_num=48&session=245d98da0bdf80c4d642cbffd965746a&three_category_id=2;must

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=4&ret_num=48&session=245d98da0bdf80c4d642cbffd965746a&three_category_id=2;must

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=4&page_id=2&ret_num=48&session=ca7d984690dbc8bf06aded9d15bca9f0&three_category_id=3;must,8;must

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=4&page_id=2&ret_num=48&session=757d98656e34d96753ab3976f024a565&three_category_id=28997;must,11;must

			// http://localhost/aqyapi?channel_id=24&data_type=1&mode=24&page_id=1&ret_num=48&three_category_id=2237;must
			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=2&ret_num=48&session=413d984951558d216e8d1d686532173d&three_category_id=308;must
			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=2&ret_num=48&session=587d981c1888ce9a48db9e2162e9b704&three_category_id=4;must


			// b站接口：https://api.bilibili.com/pgc/web/rank/list?season_type=1&day=3 动漫
			// https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time=1623107310&category=pc_profile_recommend&_signature=_02B4Z6wo005016r0uiQAAIDAYkhzOOHE8ouq0L6AAIoMCiXc07N6UcccTuHYO77-dEiyqCf.6TmEgHqd5eDRgqRA0SSWQd3-NWQ-IiLbWLlzQk6kv5ChJh1PegR2gmTMQ6rUCtRKBLZvVgX01d 新闻


			// https://u.y.qq.com/cgi-bin/musics.fcg?_=1623116475291&sign=zzazftm5wl81y61ae384f081c4d74d14286ca3f8c8b904b 音乐

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=25&data_type=1&mode=1&page_id=2&ret_num=48&session=5b2d989d512763a6bb5f1305e13ca9e6&three_category_id=20031;must  //新闻

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&data_type=1&mode=24&page_id=2&ret_num=48&session=ec6d9823e3c28a6439ce2cbecbbf3107&three_category_id=32784;must 动漫

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=6&data_type=1&mode=24&page_id=3&ret_num=48&session=75cd981e467d17301e8f7ccabb62c6d1 中移

			// https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=2&ret_num=48&session=72dd980a90d57371eb9b3ca08be392bb&three_category_id=2;must,9;must 科幻