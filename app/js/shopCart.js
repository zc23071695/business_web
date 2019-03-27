
	new Vue({
		el : "#test",
		data : {
			productList:[
				{
					'proName' :'T恤 欧飞鸿 英雌 黑色',
					'proNum' : 1,
					'proPrice' :98,
				},
				{
					'proName' :'T恤 欧飞鸿 英雌 白色',
					'proNum' : 1,
					'proPrice' :98,
				},
				{
					'proName' :'小T恤 欧飞鸿 英雌 彩色',
					'proNum' : 1,
					'proPrice' :98,
				}
			],
		},
		methods:{
			selectProduct:function(_isSelect){
                //遍历productList，全部取反
                for (var i = 0, len = this.productList.length; i < len; i++) {
                    this.productList[i].isSelect = !_isSelect;
                }
            },
			deletePro : function(index){
				alert("你正在删除"+this.productList[index].proName);
				this.productList.splice(index,1);
				

			},
			//删除已经选中(isSelect=true)的产品
            deleteProduct:function () {
                this.productList=this.productList.filter(function (item) {return !item.isSelect})
            },
		},
		computed:{
			//检测是否全选
            isSelectAll:function(){
                //如果productList中每一条数据的isSelect都为true，返回true，否则返回false;
                return this.productList.every(function (val) { return val.isSelect});
            },
			getTotal:function(){
				var prolist = this.productList.filter(function (val) { return val.isSelect}),
				totalPri = 0;
				for (var i = 0,len = prolist.length; i < len; i++) {
					totalPri+=prolist[i].proPrice*prolist[i].proNum;
				}
				return {totalNum:prolist.length,totalPrice:totalPri}
			},
		},
		mounted:function () {
        var _this=this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'isSelect', true);
        })
        }
        
	})
