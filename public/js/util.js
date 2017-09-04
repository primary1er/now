define(['jquery'],function ($){
	// 工具函数
	return{
		setMenu:function(path){
			$('.navs a[href="'+path+'"]').addClass('active');
		},
		// 获取url中指定的参数值
		qs:function(key){
			//flag=11&abc=12
			// console.dir(param);
			var param = location.search.substring(1);
			var result = null;
			if(param){
				var kvs = param.split('&');
				$.each(kvs,function(i,item){
					var kv = item.split('=');
					if(key==kv[0]){
						result  = kv[1];
						return false;
					}
				})
			}
			return result;
		}
	}
	

} );
