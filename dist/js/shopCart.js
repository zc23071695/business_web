var shopCart = (function () {
	var $box, shopData;
	return {
		init: function ($el) {
			$box = $($el);
			// this.__setData()
			this.getCarData();
			this.event();

		},
		event: function () {
			var _this = this;
			$box.on('click', '.shop-btn-del', function () {
				var self = $(this);
				// 获取点击按钮的索引
				var index = self.index('.shop-btn-del');
				shopData.splice(index, 1);
				// 删除对应dom, 重新渲染
				_this.insertData(shopData);
				// 修改本地数据
				_this.setCarData();

			});

			$box.on('change', '.shop-count', function () {
				var val = $(this).val() - 0;
				var index = $(this).index('.shop-count');
				shopData[index].count = val;
				// 更新总价, 从新渲染数据
				_this.insertData(shopData);
				// 更新本地数据
				_this.setCarData();
			})
		},
		__setData() {
			var data = [
				{
					"id": 1,
					"name": "T恤 欧飞鸿 英雌 黑色",
					"size": "L",
					"price": 98,
					"count": 1,
					"discount": "-",
					"subtotal": 98,
					"operation": "删除"
				},



			]
			localStorage.shopList = JSON.stringify(data);
		},
		// 获取商品数据
		getCarData() {


			// ]`;
			var data = JSON.parse(localStorage.shopList || '[]')
			this.insertData(data);


		},
		// 添加到购物车的数据
		setCarData() {
			localStorage.shopList = JSON.stringify(shopData);
		},

		insertData(data) {
			$box.html('');
			shopData = data;
			// localStorage.shopList = JSON.stringify(shopData);
			if (data.length == 0) {

				var shopNone = `
				<div id="cart-gift">
				<div id="cart">
				</div>
					<div id="cart-empty">
						您的购物车中没有商品，请您先 <a href="../index.html">选购商品»</a></div>	 
				</div>
                `
				$box.append(shopNone);
			} else {
				let count = 0;
				let money = 0;
				data.forEach(item => {
					money += (item.price * item.count);
				})
				data.forEach(x => {
					count++;
					var htmlTemplate = `
					<div id="test">
					<table id="mytable" cellspacing="0">
						<tr class="target">
							<th><input type="checkBox" class="allpick"  />全选</th>
							<th class="image"> </th>
							<th class="product">商品</th>
							<th class="size">尺寸</th>
							<th class="price">单价</th>
							<th class="count">数量</th>
							<th class="discount">优惠</th>
							<th class="subtotal">小计</th>
							<th class="operate">操作</th>
						</tr>
						<tr>
							<td><input type="checkBox"  ></td>
							<td><img src="../images/6380951-1j201903071600005973.jpg" alt=""></td>
							<td>${x.name}</td>
							<td>L</td>
							<td>${x.price}</td>
							<td><span><a href="#" class ="decrease" index="${count - 1}" >-</a></span><strong>${x.count}</strong><span><a href="#" class ="increase" index="${count - 1}">+</a></span></td>
							<td>-</td>
							<td>${x.price * x.count}</td>
							<td><a  class = "shop-btn-del">删除</a></td>
						</tr>
					</table>
					<div class="checkPro">
						<div class="leftContent">
								<input type="checkBox" class="allpick"   />全选
							&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#" >删除</a></span>
							
						</div>
						<div class="rightContent">
							<span>产品金额件总计（不含运费）： </span><p>￥${money}</p>
						</div>
						
					</div>
				</div>
					`;
					if (count == 1) {
						$box.append(htmlTemplate);
					} else {
						$(".target").after(`<tr>
						<td><input type="checkBox"  ></td>
						<td><img src="../images/6380951-1j201903071600005973.jpg" alt=""></td>
						<td>${x.name}</td>
						<td>L</td>
						<td>${x.price}</td>
						<td><span><a href="#" class ="decrease" index="${count - 1}">-</a></span><strong>${x.count}</strong><span><a href="#" class ="increase" index="${count - 1}">+</a></span></td>
						<td>-</td>
						<td>${x.price * x.count}</td>
						<td><a  class = "shop-btn-del">删除</a></td>
					</tr>`);

					}

				});

			}
		},

	}
}())