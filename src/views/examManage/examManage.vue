<template>
    <div class="exam-manage">
        <h1 class="title">考试管理<span class="info">查看和管理考试概况</span></h1>
        <div class="ui container">
            <div id="content">
                <vuetable
                    table-wrapper="#content"
                    :fields="columns"
                    :item-actions="itemActions"
                ></vuetable>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import vuetable from 'components/vuetable/vuetable'
export default {
    data() {
        return {
            columns: [
                'name',
                'nickname',
                'email',
                'birthdate',
                'gender',
                '__actions'
            ],
            itemActions: [
                { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
                { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button' },
                { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
            ]
        }
    },
    created() {
        axios.get('http://orc2mim1t.bkt.clouddn.com/exam_manage')
            .then((response) => {
                // let data = response.data.data;
            })
    },
    components: {
        vuetable
    }
}
</script>
<style lang="stylus">
.exam-manage
  width: 100%
  height: 100%
  .title
    padding-left: 15px
    font-size: 18px
    color: #333
    line-height: 30px
    .info
      display: inline-block
      margin-left: 10px
      line-height: 30px
      font-size: 14px
      color: #999
</style>
