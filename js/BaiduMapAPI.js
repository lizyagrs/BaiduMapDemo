 function initmap(){
 	var map = new BMap.Map("allmap");
	window.map = map;
	var point = new BMap.Point(114.340573,30.582647);//设置中心位置
	map.centerAndZoom(point, 12);//缩放级别
	map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
	map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
	map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
	map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
	var opts = {offset: new BMap.Size(150, 5)}    //添加一些偏移值以防止控件重叠
	map.addControl(new BMap.PanoramaControl(opts));         //添加全景地图控件
	map.enableInertialDragging();// 开启惯性拖拽效果 
	map.enableContinuousZoom();// 允许连贯改变地图比例
	var ctrl = new BMapLib.TrafficControl();      
    map.addControl(ctrl);
    ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT); //添加交通流量控件
    map.enableScrollWheelZoom(); 

	//添加左上角切换城市工具
	var size = new BMap.Size(10, 20);
	 	map.addControl(new BMap.CityListControl({
	    anchor: BMAP_ANCHOR_BOTTOM_LEFT,
	    offset: size,
	}));
 }
