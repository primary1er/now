define(['jquery','template','util','bootstrap'],function($,template,util){

	// 设置导航菜单选中、
	util.setMenu(location.pathname);

	

//请求后台接口
	$.ajax({
		type : 'get',
	    url : '/api/teacher',
	    dataType : 'json',
	    success : function(data){
	    	// console.log(data)
	    	// 解析数据
	    	var html = template('teacherTpl',{list:data.result});
	    	$('#teacherInfo').html(html);

			// 查看预览
	    	$('.preveiw').click(function(){
	    		var tcId=$(this).closest('td').attr('data-tcId');
	    		// console.log(tcId)
	    		$.ajax({
	    			type:'get',
	    			url:'/api/teacher/view',
	    			data : {tc_id:tcId},
	    			dataType:'json',
	    			success:function(data){
	    				console.log(data)
	    				var html = template('modalTem',data.result);
	    				$('#modalInfo').html(html);
	    				// 显示弹窗
	    				$('#teacherModal').modal();
	    			}
	    		});

	    	});
	    	// 处理启用注销
	    	$('.eod').click(function(){
	    		var td= $(this).closest('td');
	    		var tcId=td.attr('data-tcId');
	    		var tcStatus=td.attr('data-status');
	    		var that=this;
	    		// console.log(11);
	    		$.ajax({
	    			type:'post',
	    			url:'/api/teacher/handle',
	    			data:{tc_id:tcId,tc_status:tcStatus},
	    			dataType : 'json',
	    			success:function(data){
	    				// console.log(data);
	    				td.attr('data-status',data.result.tc_status);
	    				if(data.result.tc_status==0){
	    					$(that).html('注销');

	    				}else{

	    					$(that).html('启用');
	    				}
	    			}
	    		})
	    	})
	    }
	})


})