<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="main">
            <p class="wrap"><router-link tag="a" to="/club">加入俱乐部</router-link><span>>俱乐部章程</span></p>
            <h3>普信·绿盟菁英俱乐部菁英会员章程</h3>
            <p class="chapter txt">第一章  总则</p>
            <p class="txt">第一条  俱乐部的名称</p>
            <p class="txt">俱乐部中文名称为普信•绿盟菁英俱乐部（以下简称俱乐部），英文译名为PUXIN • LVMENG Elite Club。</p>
            <p class="txt"></p>
            <p class="txt">第二条  俱乐部的宗旨</p>
            <p class="txt">以统一的入会资格金标准聚合中国业余高尔夫的高净值球友，创新高尔夫服务模式，创建中国最具影响力的高尔夫精英社交圈。</p>
            <p class="txt"></p>    
            <p class="txt">第三条  俱乐部的机构</p>
            <p class="txt">1.发起机构：普信资产管理有限公司。</p>
            <p class="txt">2.运营机构：湖南绿盟体育俱乐部有限公司。</p>
            <p class="txt">3.服务机构：国内知名高尔夫电商服务机构为俱乐部会员畅打与行程预订服务授权商；各省市机构合伙人为嘉年华、财富邀请赛、城市俱乐部等专属服务公司。</p>
            <p class="txt"></p>            
            <p class="chapter txt">第二章   权益</p>
            <p class="txt"></p>
            <p class="txt">第四条  会员的专享服务</p>
            <p class="txt">1.菁英嘉年华。免费参加一年一度的高尔夫嘉年华活动，含4场18洞高尔夫联谊赛、财富论坛、旅游考察、主题活动、酒店、餐饮、地接等会员专享服务。</p>
            <p class="txt">2.菁英邀请赛。每年免费参加4次以上全国性菁英邀请赛，每次免费项目含2场18洞高尔夫联谊赛、1场财富管理论坛、2晚酒店住宿、颁奖晚宴等会员专享服务。</p>
            <p class="txt">3.菁英畅打。每年尊享国内外300家以上球场共24场（18洞/场），不分平日假日，统一人民币300元/18洞的会员待遇。</p>
            <p class="txt">4.菁英假日。每年尊享2次国内、1次国外免费高尔夫度假行程，含每次3场18洞击球、酒店、地接等会员专享服务。</p>
            <p class="txt">5.菁英装备。俱乐部每年为会员免费订制1套专属装备，含球衣、球帽、球裤、球包、衣物包及其他定制附件。</p>
            
            <p class="txt"></p>
            <p class="txt">第五条  会员的增值服务</p>
            <p class="txt">1.俱乐部城市会所。根据各城市会员发展规模，适时建设俱乐部城市会所，提供球场预订、赛事策划、会员沙龙、财富讲座等会员增值服务。</p>
            <p class="txt">2.普信财富联谊赛。根据各地会员发展规模，俱乐部将适时举办城市赛、跨区域联谊赛、挑战赛、年度积分赛等形式多样的会员赛事，为会员提供更丰富的参赛体验和更广阔的交流平台。</p>
            <p class="txt">3.会员康疗。会员将享受由俱乐部匹配全球顶尖的医疗资源，可享全国千名医疗专家的在线门诊和优先诊疗服务。</p>
            <p class="txt">4.其它服务。俱乐部会员可享有财富配置、海外投资、家族传承等咨询服务。</p>
            <p class="txt"></p>
            <p class="txt">第六条  权益期限</p>
            <p class="txt">1.会员权益有效期为5年，从运营机构收到会员的入会资格金之日起生效。</p> 
            <p class="txt">2.会员权益期限最小单位为年，入会第二个年度起，会员可申请退出，在申请年度的权益期限结束后15个工作日内，入会资格金将全额返还。</p>
            <p class="chapter txt"></p>
            <p class="chapter txt">第三章  入会规则</p>
            <p class="txt"></p>
            <p class="txt">第七条  入会条件</p>
            <p class="txt">1.热爱高尔夫球运动、尊重高尔夫球运动的精神和传统道德规范。</p>
            <p class="txt">2.会员拥护俱乐部章程，遵守本章程有关内容，且年龄满18周岁。</p>
            <p class="txt">3.按时足额缴付资格金，正式成为俱乐部成员，尊享会员待遇。</p>
            <p class="txt"></p>
            <p class="txt">第八条  入会流程</p>
            <p class="txt"> 第一步：申请人签约成为俱乐部会员。</p>
            <p class="txt"> 第二步：会员将入会资格金转至俱乐部指定的银行存管账户。</p>
            <p class="txt"> 第三步：俱乐部确认入会资格金到账后，会员身份及权益生效。</p>
            <p class="txt"> 第四步：会员在权益期限内按俱乐部章程、入会协议和球场运营规则等正式行权。</p>
            <p class="txt"></p>
            <p class="txt">第九条  入会资格金</p>
            <p class="txt">1.资格金定义。俱乐部接受业余高尔夫高净值精英球员加盟的必须条件，藉以识别并创建真正具备持续商业运营价值的高尔夫精英社交圈。</p>
            <p class="txt">2.资格金标准。入会资格金起始标准为人民币伍拾万元整。</p>
            <p class="txt"></p>
            <p class="txt">第十条  权益的终止、退出及继续</p>
            <p class="txt">1.权益的终止。权益期限到期之日，会员身份及权益自动终止；到期之日起15个工作日内，运营机构全额返还会员所缴纳的入会资格金。</p>
            <p class="txt">2.权益的退出。入会第二个年度起，会员每年度可提交一次退出申请，退出申请在当年到期日结束前6个月提交，在申请年度的权益期限结束之日起会员身份及权益自动终止。会员权益期限结束后15个工作日内，运营机构全额返还会员所缴纳的入会资格金。</p>
            <p class="txt">3.权益的继续。会员权益有效期截止日前60天内，会员可申请续约，并在会员有效期满前30天内签署书面续约协议，会员身份及权益继续生效。</p>
            <p class="txt"></p>
            <p class="txt">第十一条  创始会员定义</p>
            <p class="txt">前300位加入俱乐部的为创始会员，入会资格金为人民币伍拾万元整，享受以下特别权益：</p>
            <p class="txt">1.会员权益期内，每年参加菁英嘉年华和菁英邀请赛，享有免费往返经济舱机票或高铁一等座票权益。</p>
            <p class="txt">2.享有优先竞选担任所在省/市俱乐部的会长、副会长等职务的权益。</p>
            <p class="txt">3.享有对后续申请加入俱乐部的菁英会员资格的初审权和投票权。</p>
            <p class="txt">4.享有优先参与运营机构及关联项目的投资。</p>
            
            <p class="txt"></p>
            <p class="chapter txt">第四章    会员规范</p>
            <p class="txt"></p>
            <p class="txt">第十二条  行为规范</p>
            <p class="txt">1.会员在足额缴付入会资格金后，才能享有会员资格和权益。</p>
            <p class="txt">2.会员应当自觉遵守高尔夫礼仪、规则和本章程。</p>
            <p class="txt">3.会员应当遵守高尔夫场馆、酒店、航空等服务供应商的经营制度与秩序，尊重国内国际服务所在地区的各种风俗民情和礼节礼仪。</p>
            <p class="txt">4.会员应当自觉维护俱乐部的形象和声誉，未经书面授权，不得以俱乐部名义从事与俱乐部品牌声誉和利益相关的任何活动。</p>
            <p class="txt">5.会员的联系地址等信息如有变更，应当及时告知俱乐部。如会员因未及时将变更信息告知俱乐部，致使会员权益未能正常履行，相关后果与责任由会员自行承担。</p>
            <p class="txt">6.会员权益仅限会员本人享有，禁止他人顶替或冒名享受。</p>
            <p class="txt"></p>
            <p class="txt">第十三条  行权规则</p>
            <p class="txt">1.菁英嘉年华</p>
            <p class="txt">（1）俱乐部通过官方网站、微信公众号等通道提前公布嘉年华举办信息。</p>
            <p class="txt">（2）会员须提前通过入会注册/预留手机号码拔打俱乐部指定预订热线进行报名。</p>
            <p class="txt">（3）会员未通过报名，直接到达赛场将无法参加嘉年华活动。</p>
            <p class="txt">（4）本权益限会员本人使用，不结余，按服务年度到期自动清零。</p>
            <p class="txt"></p>
            <p class="txt">2.菁英邀请赛</p>
            <p class="txt">（1）俱乐部通过官方网站、微信公众号等通道提前公布邀请赛举办信息。</p>
            <p class="txt">（2）会员需提前通过入会注册/预留手机号码拔打俱乐部指定预订热线进行报名。</p>
            <p class="txt">（3）会员未通过报名，直接到达赛场将无法参赛。</p>
            <p class="txt">（4）本权益限会员本人使用，不结余，按服务年度到期自动清零。</p>
            <p class="txt"></p>
            <p class="txt">3.菁英畅打</p>
            <p class="txt">权益期限内，会员每年享有24场（18洞/场），不分平假日，统一支付人民币300元/18洞击球包价的会员待遇。</p>
            <p class="txt">（1）会员须提前24小时通过入会注册/预留手机号码，由本人拔打指定预订热线进行预订，会员直接到球场使用无效。</p>
            <p class="txt">（2）每次人民币300元/18洞的会员击球包价，由会员在预订时支付至俱乐部指定服务机构账户。</p>
            <p class="txt">（3）会员因故不能到达或不能准时到达球场开球，应提前12小时通过俱乐部指定预订热线取消或修改预订（18：00以后至次日7:00不接受取消和修改），否则按No Show处罚，并同时扣除预付款项及相应打球权益次数。</p>
            <p class="txt">（4）会员须自觉遵守球场的各项营业与消费规范，会员与行权球场之间造成的纠纷由会员及球场自行处理解决。</p>
            <p class="txt">（5）俱乐部将持续优化行权球场名单，具体行权球场名单以俱乐部公布的为准。</p>
            <p class="txt">（6）俱乐部会根据市场的实际情况不断优化行权球场的扣次方式，具体内容以俱乐部公布的为准。</p>
            <p class="txt">（7）本权益限会员本人使用，权益次数不结余，按服务年度到期自动清零。</p>
            <p class="txt"></p>
            <p class="txt">4.菁英假日</p>
            <p class="txt">（1）俱乐部通过官方网站、微信公众号提前公布热门的高尔夫行程。</p>
            <p class="txt">（2）会员需提前通过入会注册/预留手机号码拔打俱乐部指定预订热线进行预订，具体以俱乐部公布的行程规则为准。</p>
            <p class="txt">（3）具体行权规则见当期行程产品约定。</p>
            <p class="txt">（4）本权益限会员本人使用，不结余，按服务年度到期自动清零。</p>
            <p class="txt"></p>
            <p class="txt">5.增值服务</p>
            <p class="txt">会员增值服务根据当期公布的行权规则执行。</p>
            <p class="txt"></p>
            <p class="txt">本章程的解释权归湖南绿盟体育俱乐部有限公司所有。</p>
            <p class="txt">本人已知悉本章程全部权益内容，自愿履行相应权责和义务。</p>
            
            
        </div>
        <div class="main">
            <h3>普信·绿盟菁英俱乐部钻石会员章程</h3>
            <p class="chapter txt">第一章  总则</p>
            <p class="txt">第一条  俱乐部的名称</p>
            <p class="txt">俱乐部中文名称为普信•绿盟菁英俱乐部（以下简称“俱乐部”），英文译名为PUXIN • LVMENG Elite Club。</p>
            <p class="txt"></p>
            <p class="txt">第二条  俱乐部的宗旨</p>
            <p class="txt">聚合中国业余高尔夫的高净值球友，创新高尔夫服务模式，创建中国最具影响力的高尔夫精英社交圈。</p>
            <p class="txt"></p>    
            <p class="txt">第三条  俱乐部发起机构与运营机构</p>
            <p class="txt">1.发起机构：普信资产管理有限公司。</p>
            <p class="txt">2.运营机构：湖南绿盟体育俱乐部有限公司。</p>
            <p class="txt">第四条  章程适用对象</p>
            <p class="txt">本章程适用于普信·绿盟菁英俱乐部钻石会员。</p>



            <p class="txt"></p>            
            <p class="chapter txt">第二章  入会规则与钻石会员权益</p>
            <p class="txt"></p>
            <p class="txt">第五条  入会条件</p>
            <p class="txt">1.热爱高尔夫球运动、尊重高尔夫球运动的精神和传统道德规范。</p>
            <p class="txt">2.拥护俱乐部章程，遵守本章程有关内容，且年龄满18周岁具有完全民事行为能力的自然人。</p>
            <p class="txt">3.自愿通过发起机构或其合作机构完成年度资产配资额度人民币壹佰万元起。</p>
            
            <p class="txt"></p>
            <p class="txt">第六条  入会流程</p>
            <p class="txt"> 第一步：申请人签署与资产配置有关的协议。</p>
            <p class="txt"> 第二步：俱乐部审核批准，申请人选择钻石会员类型，并支付相应的服务费用。</p>
            <div>
                <img src="../../assets/images/table1.png" alt="" width="1200">
            </div>
            <p class="txt">俱乐部开设的服务费指定收款账户为： </p>
            <p class="txt">开户名称：湖南绿盟体育俱乐部有限公司</p>
            <p class="txt">开户银行：兴业银行长沙南城支行</p>
            <p class="txt">银行账号：368090100100154485</p>
            <p class="txt"></p>


            <p class="txt"> 第三步：申请人填写完整的个人信息，保障其顺利尊享菁英俱乐部权益和服务。</p>
             <div>
                <img src="../../assets/images/table2.png" alt="" width="1200">
            </div>
            <p class="txt"> 第四步：资产配置成功且服务费用到账确认后，会员身份及权益生效。</p>
            <p class="txt"></p>

            <p class="txt">第七条 </p>
            <p class="txt">（一）	钻石会员Ⅰ</p>
            <p class="txt">1、高尔夫专享增值服务：</p>
            <p class="txt">1）菁英畅打：每年尊享国内外300家以上球场，共12场（18洞/场），不分平假日，统一300元/18洞的会员待遇。</p>
            <p class="txt">2）菁英邀请赛：每年免费参加不低于4次普信绿盟俱乐部举办的高尔夫赛事（含18洞/场击球、晚宴、礼品等。具体以普信绿盟俱乐部发布的赛事信息为主。）。</p>
            <p class="txt">3）菁英嘉年华：有机会免费参加菁英俱乐部嘉年华活动。</p>
            <p class="txt">4）菁英装备：俱乐部统一配置装备，含球衣、球帽、衣物包等定制附件。</p>
            <p class="txt">2、综合增值服务</p>
            <p class="txt">1）俱乐部城市会所。根据各城市会员发展规模，适时建设俱乐部城市会所，提供球场预订、赛事策划、会员沙龙、财富讲座等会员增值服务。</p>
            
                        




            <p class="txt">2）普信财富联谊赛。根据各地会员发展规模，俱乐部将适时举办城市赛、跨区域联谊赛、挑战赛、年度积分赛等形式多样的会员赛事，为会员提供更丰富的参赛体验和更广阔的交流平台。</p>
            <p class="txt">3）会员康疗。会员将享受由俱乐部匹配全球顶尖的医疗资源。</p>
            <p class="txt">4）其它服务。俱乐部会员可享有财富管理、资产配置、海外投资、家族传承等咨询服务。</p>
            <p class="txt">（一）	钻石会员Ⅱ</p>
            <p class="txt">1）区域月例赛。有权参加本俱乐部在当地举办的月例赛，享受免费打球待遇，每年不低于四场；</p>
            <p class="txt">2）俱乐部城市会所。根据各城市会员发展规模，适时建设俱乐部城市会所，提供球场预订、赛事策划、会员沙龙、财富讲座等会员增值服务。</p>
            <p class="txt">3）普信财富联谊赛。根据各地会员发展规模，俱乐部将适时举办城市赛、跨区域联谊赛、挑战赛、年度积分赛等形式多样的会员赛事，为会员提供更丰富的参赛体验和更广阔的交流平台。</p>
            <p class="txt">4）会员康疗。会员将享受由俱乐部匹配全球顶尖的医疗资源。</p>
            <p class="txt">5）其它服务。俱乐部会员可享有财富管理、资产配置、海外投资、家族传承等咨询服务。</p>
            <p class="txt">（二）	钻石会员权益期限</p>
            <p class="txt">1.钻石会员权益有效期为【  】年，自资产配资资金及服务费全部到账之日起生效。</p>
            <p class="txt">2.钻石会员在权益期限内按本章程和球场运营规则等正式行权。</p>
            <p class="txt">3.钻石会员资产配置最后期限到期之日，会员身份及会员权益自动终止。</p>
            <p class="txt">第八条  创始会员定义</p>
            <p class="txt">前300位加入俱乐部的为创始会员，享受以下特别权益：</p>
            <p class="txt">1.会员权益期内，每年参加菁英嘉年华和菁英邀请赛，享有免费往返经济舱机票或高铁一等座票权益。</p>
            <p class="txt">2.享有优先竞选担任所在省/市俱乐部的会长、副会长等职务的权益。</p>
            <p class="txt">3.享有对后续申请加入俱乐部的菁英会员资格的初审权和投票权。</p>
            <p class="txt">4.享有优先参与运营机构及关联项目的投资。</p>
            <p class="chapter txt">第三章  会员规范</p>
            <p class="txt">第九条  行为规范</p>
            <p class="txt">1.会员应当自觉遵守高尔夫礼仪、规则和本章程。</p>
            <p class="txt">2.会员应当遵守高尔夫场馆、酒店、航空等服务供应商的经营制度与秩序，尊重国内国际服务所在地区的各种风俗民情和礼节礼仪。</p>
            <p class="txt">3.会员应当自觉维护俱乐部的形象和声誉，未经书面授权，不得以俱乐部名义从事与俱乐部品牌声誉和利益相关的任何活动。</p>
            <p class="txt">4.会员的联系地址等信息如有变更，应当及时告知俱乐部。如因会员未及时将变更信息告知俱乐部，致使会员权益未能正常履行，相关后果与责任由会员自行承担。</p>
            <p class="txt">5.会员权益仅限会员本人享有，未经本俱乐部同意，禁止转让给其他第三方或冒名享受。</p>
            <p class="txt">第十条  行权规则</p>
            <p class="txt">1.菁英畅打</p>
            <p class="txt">权益期限内，会员每年不分平假日，享有12场（18洞/场）人民币300元/18洞击球包价的会员待遇。</p>
            <p class="txt">具体要求：</p>
            <p class="txt">（1）会员须提前24小时通过入会注册时预留的手机号码，由本人拔打指定预订热线或通过官方微信、网站进行预订，会员直接到球场使用无效。</p>
            <p class="txt">（2）每次人民币300元/18洞的会员击球包价（包含服务内容以球场服务规则为准），由会员在预订时支付至俱乐部指定服务机构账户。</p>
            <p class="txt">（3）会员因故不能到达或不能准时到达球场开球，应提前12小时通过俱乐部指定预订热线取消或修改预订（18：00以后至次日7:00不接受取消和修改），否则按No Show处罚，同时扣除相应打球权益次数并不退还已支付款项。 </p>
            <p class="txt">（4）会员须自觉遵守球场的各项营业与消费规范，会员与行权球场之间发生纠纷，由会员与球场自行处理解决。</p>
            <p class="txt">（5）俱乐部将持续优化行权球场名单，具体行权球场名单以俱乐部公布的为准。</p>
            <p class="txt">（6）俱乐部会根据市场的实际情况不断优化行权球场的扣次方式，具体内容以俱乐部公布的为准。</p>
            <p class="txt">（7）本权益限会员本人使用，权益次数不结余，按权益期限到期自动清零。</p>
            <p class="txt">2.菁英邀请赛</p>
            <p class="txt">（1）俱乐部通过官方网站、微信公众号等通道提前公布邀请赛举办信息。</p>
            <p class="txt">（2）会员需提前通过入会注册时预留的手机号码拔打俱乐部指定预订热线进行报名（报名是否成功最终以俱乐部通知为准）。</p>
            <p class="txt">（3）会员未提前报名，直接到达赛场将无法参赛。</p>
            <p class="txt">（4）本权益限会员本人使用，不结余，按权益期限到期自动清零。</p>
            <p class="txt">3.菁英嘉年华</p>
            <p class="txt">（1）俱乐部通过官方网站、微信公众号等通道提前公布嘉年华举办信息。</p>
            <p class="txt">（2）会员须提前通过入会注册时预留的手机号码拔打俱乐部指定预订热线或预订通道进行报名（报名成功与否以俱乐部通知为准）。</p>
            <p class="txt">（3）会员未提前报名，直接到达赛场将无法参加嘉年华活动。</p>
            <p class="txt">（4）本权益限会员本人使用，不结余，按权益期限到期自动清零。</p>
            <p class="txt">4.增值服务</p>
            <p class="txt">会员增值服务根据俱乐部当期公布的行权规则执行。</p>

            <p class="txt"></p>
            <p class="chapter txt">第四章  附则</p>
            <p class="txt"></p>
            <p class="txt">第十一条  本章程的解释权归湖南绿盟体育俱乐部有限公司所有</p>
            <p class="txt">第十二条  第十二条  本章程自发布之日起生效。自会员签署之日起对会员具有约束效力。</p>
            <p class="txt">本人已知悉本章程全部内容，自愿履行相应权责和义务。</p>
            <p class="txt" style="padding-left:900px;">申请会员（签字或盖章）：</p>
            <p class="txt" style="padding-left:900px;">  <span style="padding-left:50px;">年</span>   <span style="padding-left:50px;">月</span>    <span style="padding-left:50px;">日</span></p>
            
            
        </div>
        <div class="clubbotton" @click="centerDialogVisible = true"></div>
        <nav-bar></nav-bar>
        <el-dialog
            title="联系客服"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <div class="contact">400-817-8588</div>
            <p class="contact_tip">拨打上方电话，完成会员申请</p>
            <span slot="footer" class="dialog-footer">
                <el-button  @click="centerDialogVisible = false" class="kown">我知道了</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    import message from 'components/common/message'
    import spaceHeader from 'components/common/spaceHeader'
    export default {
        components: {
            mHeader,
            spaceHeader,
            navBar,
            slider,
            message
        },
        data() {
            return {
                centerDialogVisible: false,
                currentIndex: 6,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'black'  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            };
        }
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 80px;
        // background: url("../../assets/images/header.png") no-repeat center top;
        // background-size: cover;
    }
    a{
        color: #333333;
    }
    // header{
    //     width: 100%;
    //     color: #333333;
    //     border-bottom: 1px solid #FFFFFF;
    // }
    .head_nav{
        width: 1200px;
        margin: 0 auto;
        height: 80px;
        display: flex;
        justify-content: space-between;
    }
    #logo{
        width: 100px;
        height: 42px;
        margin-top: 19px;
    }
    .head_nav ul{
        width: 80%;
        height: 80px;
        text-align:right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .head_nav ul li{
        margin-left:65.6px;
        display: inline-block;
        font-size: 16px;
        padding: 28px 0px;
        height: 22px;
        line-height: 22px;
    }
    .head_nav ul li.active{
        border-bottom: 2px solid #8F6448;  
        color: #8F6448;      
    }
    .head_nav ul li.active a{
        color: #8F6448;      
    }
    .orange{
        color: #906448;
    }

    .wrap{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #666666;
        font-weight: normal;
        margin: 30px 0 0 0px;
    }
    .wrap span{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        font-weight: 500;
        margin-left: 5px;
    }

    .main h3{
        height: 33px;
        line-height: 33px;
        font-size: 24px;
        color: #333;
    }
    .chapter{
        font-size: 18px;
        text-align: center;
        padding: 5px 0 0 0;
    }
    .txt{
        color: #666666;
        line-height: 27px;
        margin: 5px 0;
    }
    .main{
		width: 1200px;
        margin: 0 auto 65px auto;
    }


	h3{
		font-weight: normal;
        color: #906448;
        height: 56px;
        line-height: 56px;
        font-size: 40px;
        margin: 88px 0px 74px 0px;
        text-align: center;
    }
	.content{
		width: 1200px;
		margin: 20px auto 167px auto;
    }
    .main .clubbotton{
        width: 504px;
        height: 80px;
        margin: 0 auto 202px auto;
        background: url("../../assets/images/clubbotton.png") no-repeat -10px -3px;
    }
    .contact{
        font-size: 44px;
        height: 56px;
        line-height: 56px;
        color: #333333;
        text-align: center;
    }
    .contact_tip{
        height: 31px;
        line-height: 31px;
        font-size: 18px;
        text-align: center;
    }
    .kown{
        width: 160px;
        height: 40px;
        font-size: 14px;
        color: #fff;
        border-radius: 100px;
        background: -webkit-linear-gradient(#DEB58F, #A37749); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#DEB58F, #A37749); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#DEB58F, #A37749); /* Firefox 3.6 - 15 */
        background: linear-gradient(#DEB58F, #A37749); /* 标准的语法 */
    }
    .el-dialog__headerbtn .el-dialog__close:hover {
        color: #A37749;
    }
    .clubbotton{
        width: 504px;
        height: 80px;
        margin: 0 auto 80px auto;
        background: url("../../assets/images/clubbotton.png") no-repeat -10px -3px;
    }
</style>
