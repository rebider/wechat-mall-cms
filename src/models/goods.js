import { get, post, _delete } from '@/lin/plugins/axios'

class Goods {
  async getGoodsList(categoryId, goodsName, online, page, size) {
    return get(`cms/goods/list?c=${categoryId}&k=${goodsName}&o=${online}&page=${page}&size=${size}`)
  }

  async getGoods(id) {
    return get(`cms/goods/${id}`)
  }

  async editGoods({ id, brandName, title, price, discountPrice, categoryId, online, picture, bannerPicture, detailPicture, tags, description, specList }) {
    return post('cms/goods/edit', {
      id, brandName, title, price, discountPrice, categoryId, online, picture, bannerPicture, detailPicture, tags, description, specList
    })
  }

  async deleteGoods(id) {
    return _delete(`cms/goods/${id}`)
  }

  async getGoodsSpec(id) {
    return get(`cms/goods/spec?id=${id}`)
  }

  // 查询全部分类及商品
  async getGoodsAll() {
    return get('cms/goods/all')
  }
}

export default new Goods()
