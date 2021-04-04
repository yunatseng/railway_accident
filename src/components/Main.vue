<template>
  <v-container fluid>
    <v-row>
      <v-img
        class="white--text"
        src="../assets/train2.jpeg"
        :height="$vuetify.breakpoint.smAndDown?'100%':'400'"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container class="fill-height">
          <v-row
            align="center"
            :class="$vuetify.breakpoint.smAndDown?'pl-4 pr-6':''"
          >
            <strong class="display-4 font-weight-regular">2</strong>
            <v-row justify="end">
              <div class="headline font-weight-light">
                April 2021
              </div>
              <div class="text-uppercase font-weight-light ml-2">
                Friday
              </div>
            </v-row>
          </v-row>
        </v-container>
      </v-img>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div
          class="font-weight-bold title mb-2 text-center"
          :class="{'d-flex pa-2':$vuetify.breakpoint.smAndDown}"
        >
          僅列舉 109~110 年部分事故
        </div>

        <v-timeline
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(event,i) in eventList"
            :key="i"
            color="dot"
            :large="$vuetify.breakpoint.smAndDown?false:true"
            :small="$vuetify.breakpoint.smAndDown?true:false"
          >
            <template v-slot:opposite>
              <span>{{ event.date }}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">
                {{ event.normal }} <span
                  v-if="$vuetify.breakpoint.smAndDown"
                  class="ml-2 title font-weight-light"
                >{{ event.date }}</span>
              </v-card-title>
              <v-card-text>
                <ul>
                  <li
                    v-for="(item,index) in event.normalAccident"
                    :key="index"
                  >
                    <v-divider
                      v-if="index > 0"
                      class="my-6"
                    />
                    {{ item.text }}

                    <div v-if="item.image">
                      <v-dialog
                        transition="dialog-bottom-transition"
                        max-width="90%"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <img
                            class="mt-4"
                            width="100%"
                            :src="item.image"
                            alt="image"
                            v-bind="attrs"
                            v-on="on"
                          >
                          <div v-if="item.imgText">
                            {{ item.imgText }}
                          </div>
                        </template>
                        <template v-slot:default="dialog">
                          <v-card>
                            <div>
                              <img
                                width="100%"
                                :src="item.image"
                                alt="image"
                              >
                            </div>
                            <v-card-actions class="justify-end">
                              <v-btn
                                text
                                @click="dialog.value = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </div>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({
    eventList: [
      {
        date: '109 年 2 月',
        normal: '臺鐵行車事故',
        normalAccident: [{ text: '第 2134 次車辦理發車前轉線出庫時，因駕駛員低頭使用 3C 電子產品，肇致衝撞路線終端止衝檔裝置，導致編組 2 軸出軌。[1]', image: '' }],
        abnormal: '行車異常事件（42）',
      },
      {
        date: '109 年 4 月',
        normal: '臺鐵行車事故',
        normalAccident: [{ text: '電車組 EMU540 號檢修完成後進行動態測試，因檢查員操作不當，造成測試速度過快且未注意路線長度，肇致測試車上人員衝撞同股道停留車，台鐵表示，車上 7 位工作人員（1女、6男）都意識清楚可自行走動，有四人送慈濟及三人送門諾醫院救治，所幸經照X光片檢查後都無大礙。[2]', image: '' }],
        abnormal: '行車異常事件（45）',
      },
      {
        date: '109 年 5 月',
        normal: '臺鐵行車事故',
        normalAccident: [{ text: '七堵站未依規約告知司機員定例調車區域 GB 股道有停留車，且七堵機務段調車機車司機員，應注意而未注意調車路徑進路顯示器號誌條件(臆測行車)，肇致駛過彎道後，始發現股道上有停留車輛而不及煞車，造成側線衝撞事故。[3]', image: '' }],
        abnormal: '行車異常事件（50）',
      },
      {
        date: '109 年 6 月',
        normal: '臺鐵行車事故',
        normalAccident: [{ text: '第 7202 次車因司機員控速不當，高速衝撞路線停留車，導致停留車於猛烈衝擊下，造成守車連結器脫出並往高雄方向東正線溜逸至內惟~美術館站間 K399+680 處停止，經由救援單機將守車拖回新左營站。[4]', image: '' }],
        abnormal: '行車異常事件（56）',
      },
      {
        date: '109 年 11 月',
        normal: '臺鐵瑞芳猴硐路段走山事故',
        normalAccident: [{ text: '宜蘭線瑞芳－猴硐間（K12+233）路段因連續豪雨造成邊坡滑動，在全力搶修後，12月3日清晨恢復雙線通車，並派員持續監測，12月4日猴硐站通報該路段土石再次發生大規模邊坡滑動，使得宜蘭線東西正線完全中斷，經過搶修後，12月14日恢復東正線單線通，並於於隔年的2月3日清晨完成全段雙線搶通。[5]', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/%E8%87%BA%E9%90%B52021%E5%B9%B401%E6%9C%8816%E6%97%A5%E7%91%9E%E8%8A%B3-%E7%8C%B4%E7%A1%90%E9%82%8A%E5%9D%A1%E6%BB%91%E5%8B%95%E6%90%B6%E4%BF%AE%E5%B7%A5%E7%A8%8B%EF%BC%881%EF%BC%89.jpg', imgText: '由 臺灣鐵路管理局, Attribution, https://commons.wikimedia.org/w/index.php?curid=98907518' }],
        abnormal: '行車異常事件（56）',
      },
      {
        date: '110 年 1 月',
        normal: '臺鐵行車事故',
        normalAccident: [{ text: '第 8792 次試運轉車輛 R166 號單機，因電務測試 ATP 時，未將第 11B 轉 轍器納入測試條件，亦未確認第 11B 轉轍器開通方向，造成試運轉機車 衝出安全側線，導致機車 4 軸出軌，未影響其他列車。[6]', image: '' }],
        abnormal: '',
      },
      {
        date: '110 年 1 月',
        normal: '臺鐵工安事故',
        normalAccident: [{ text: '台鐵屏東潮州車輛基地進行車廂更換調車作業時，發生職安事故，一名 36 歲林姓台鐵調車員，18 日上午進行車廂更換摘掛作業時，疑似為拆除連結車廂的氣軔軟管，遭車廂重夾，受困於兩節車廂中間被兩車廂夾傷，傷重送醫不治。[7]', image: '' }, { text: '台鐵台南市新市火車站工地下午發生高壓電觸電工安意外，新市火車站 54 歲王姓男子、51 歲邱姓男子等 2 名工人，進行混凝土灌漿作業時，疑誤觸高壓電受傷，觸電灼傷面積各約 15% 與 18%，意識清楚消防人員送醫治療。[8]', image: '' }],
        abnormal: '',
      },
      {
        date: '110 年 2 月',
        normal: '臺鐵工安事故',
        normalAccident: [{ text: '工務單位於海端站進行道岔抽換工程，於工程結束後，留 3 名池上工務道班維護保養，施工時 3 人不慎遭 8742 次(電力維修車)撞擊，3 人均受傷送往關山慈濟醫院救治，關山慈濟醫院宣告：2人已不治。另1員已回復意識。共影響 8 列次、445 分約 876 人。[9]', image: '' }],
        abnormal: '',
      },
      {
        date: '110 年 4 月',
        normal: '太魯閣號列車出軌事故',
        normalAccident: [{ text: '太魯閣號 408 車次出軌事故（花蓮縣消防局稱為花蓮縣0402 交通事故），為發生於 2021 年 4 月 2 日上午 9 時 28 分，台灣花蓮縣秀林鄉和仁段清水隧道北口，台鐵北迴線的太魯閣自強號列車脫軌事故。載有 492 名乘客的台鐵 408 車次太魯閣號列車在行經該隧道時，與滑落邊坡侵入路線的工程車碰撞出軌後衝入隧道中且擦撞隧道壁，並造成 51 人死亡和 200人 輕重傷。[10]', image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/2021%E5%B9%B44%E6%9C%883%E6%97%A5%E5%8F%B0%E9%93%81%E7%AC%AC408%E6%AC%A1%E5%92%8C%E4%BB%81%E5%B4%87%E5%BE%B7%E9%97%B4%28%E6%B8%85%E6%B0%B4%E9%9A%A7%E9%81%93%29%E4%BA%8B%E6%95%85-%E7%AE%80%E6%8A%A51.png', imgText: '由 台灣鐵路管理局, Attribution, https://commons.wikimedia.org/w/index.php?curid=103024161' }, { text: '本次事故是台灣鐵道史上僅次於 1948 年新店溪橋火燒車事故的嚴重傷亡事故，死亡人數遠超過 2018 年所發生的普悠瑪列車出軌事故，也是自從 1949 年中華民國政府遷臺以來最嚴重的死傷事故。[10]', image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/2021%E5%B9%B4%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%88%97%E8%BB%8A%E5%87%BA%E8%BB%8C%E4%BA%8B%E6%95%85_01.jpg', imgText: '由 行政院, Attribution, https://commons.wikimedia.org/w/index.php?curid=102908991' }],
        abnormal: '',
      },
    ],

  }),
};
</script>
