const scriptName = "clyb";

/**
* (string) room
* (string) sender
* (boolean) isGroupChat
* (void) replier.reply(message)
* (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
* (string) imageDB.getProfileBase64()
* (string) packageName
*/

function numberFormat(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const rollet = [ '기회는 준비된 자에게 옵니다.',
'기대하지 않은 순간에 행운이 찾아옵니다.',
'웃음이 복을 부릅니다.',
'오늘의 선택이 미래를 만듭니다.',
'지금이 바로 그 순간입니다.',
'행동이 말보다 큰 힘을 가집니다.',
'좋은 인연이 생길 것입니다.',
'작은 성취가 큰 성공으로 이어집니다.',
'당신은 모든 것을 이룰 수 있습니다.',
'행운이 곧 찾아옵니다.',
'새로운 기회가 다가옵니다.',
'좋은 소식이 곧 들릴 것입니다.',
'모든 일이 잘 풀릴 것입니다.',
'뜻밖의 선물이 기다리고 있습니다.',
'당신의 노력이 빛을 발할 것입니다.',
'사랑이 곧 찾아옵니다.',
'긍정적인 변화가 있을 것입니다.',
'꿈이 이루어질 것입니다.',
'작은 변화가 큰 기적을 만듭니다.',
'즐거운 일이 생길 것입니다.',
'행복한 하루가 될 것입니다.',
'당신은 특별한 사람입니다.',
'오늘은 당신의 날입니다.',
'노력은 결코 배신하지 않습니다.',
'긍정적인 마음이 당신을 이끌 것입니다.',
'지금 시작해도 늦지 않았습니다.',
'새로운 도전이 성공을 가져올 것입니다.',
'행복은 당신 곁에 있습니다.',
'한 걸음씩 나아가면 목표에 도달합니다.',
'믿음이 당신을 성장시킵니다.',
'마음속 평화를 찾을 수 있습니다.',
'오늘의 작은 결정이 큰 변화를 만듭니다.',
'지혜는 경험에서 나옵니다.',
'당신의 가능성은 무한합니다.',
'멋진 일이 곧 펼쳐집니다.', '극락', '떡상',
'오늘은 롱', '오늘은 숏', '용의 기운', '자중하라', '뭐든 잘된다.',
'오늘은 한방', '서쪽의 귀인이', '동쪽의 귀인이',
"새로운 인연이 당신을 기다립니다.",
"기쁨이 당신의 하루를 가득 채울 것입니다.",
"작은 친절이 큰 기쁨을 가져옵니다.",
"오늘의 기회는 내일의 성공을 만듭니다.",
"당신의 긍정적인 에너지가 모두를 밝힙니다.",
"성공은 멀리 있지 않습니다.",
"끈기가 당신을 승리로 이끌 것입니다.",
"용기가 큰 변화를 가져옵니다.",
"당신은 강한 사람입니다.",
"웃음이 가득한 하루가 될 것입니다.",
"사랑과 행복이 곧 당신을 찾을 것입니다.",
"새로운 시작이 다가오고 있습니다.",
"작은 도전이 큰 성장을 가져올 것입니다.",
"당신의 꿈이 곧 현실이 될 것입니다.",
"순간을 소중히 하세요, 그 순간이 모든 것을 바꿀 수 있습니다.",
"당신의 열정이 사람들에게 영감을 줍니다.",
"고요한 마음이 답을 찾습니다.",
"모든 일이 자연스럽게 풀릴 것입니다.",
"당신의 결단력이 성공을 가져옵니다.",
"당신은 더 큰 일을 해낼 것입니다.",
"시간이 당신 편입니다.",
"오늘의 선택이 내일을 만듭니다.",
"변화를 두려워하지 마세요.",
"새로운 모험이 기다리고 있습니다.",
"지금 시작하면 반드시 성공할 것입니다.",
"작은 예방이 큰 문제를 막습니다.",
"미리 준비하는 자가 더 큰 안전을 누립니다.",
"위험은 예방으로 사라집니다.",
"미리 하는 관심이 당신을 보호합니다.",
"예방은 최고의 치료입니다.",
"작은 주의가 큰 불행을 막습니다.",
"오늘의 예방이 내일의 안전을 보장합니다.",
"안전은 습관에서 시작됩니다.",
"미리 대비하면 걱정할 일이 없습니다.",
"건강을 지키는 첫 걸음은 예방입니다.",
"사소한 주의가 큰 재앙을 막습니다.",
"예방은 후회보다 빠릅니다.",
"작은 준비가 큰 위험을 피하게 합니다.",
"예방은 미래를 위한 선물입니다.",
"안전을 지키는 가장 좋은 방법은 예방입니다.",
"조금 더 신경 쓰는 것이 큰 차이를 만듭니다.",
"정기적인 점검이 당신을 보호합니다.",
"항상 미리 준비하는 것이 더 현명합니다.",
"지혜로운 새는 먹이를 신중히 고르듯, 신중한 투자는 손실을 막아줄 거예요.",
"고요한 물결 아래 큰 물고기가 숨어있듯, 숨겨진 투자 기회를 발견할 수 있어요.",
"여러 개의 화살이 한 개의 화살보다 강하듯, 분산 투자는 위험을 줄여줄 거예요.",
"천 리 길도 한 걸음부터 시작되듯, 작은 투자 습관이 큰 자산을 만들 거예요.",
"때로는 멈춤이 다음 도약을 위한 준비가 되듯, 관망하는 것도 투자 전략이에요.",
"오래된 항아리 속 보물처럼, 장기 투자는 시간을 담아 가치를 더할 거예요.",
"밝은 달이 길을 비추듯, 긍정적인 마음은 투자 성공의 길을 열어줄 거예요.",
"신중한 저울처럼, 위험과 수익의 균형을 맞추는 것이 중요해요.",
"숲 속의 길처럼, 투자는 예측 불가능하지만, 꾸준함이 답을 찾아줄 거예요.",
"흐르는 강물처럼, 변화에 유연하게 대처하는 투자자가 성공할 거예요.",
"굳건한 바위처럼, 흔들리지 않는 믿음이 투자 결실을 맺게 할 거예요.",
"잘 벼려진 칼날처럼, 날카로운 분석력이 현명한 투자를 이끌 거예요.",
"밤하늘의 별처럼, 무수히 많은 투자 기회 속에서 당신의 별을 찾으세요.",
"정성껏 가꾼 밭처럼, 노력하는 만큼 투자는 풍성한 수확을 안겨줄 거예요.",
"나침반처럼, 투자 목표를 명확히 설정하면 길을 잃지 않을 거예요.",
"조용한 바람이 풍선을 움직이듯, 작은 정보가 큰 변화를 가져올 수 있어요.",
"함께 걷는 길은 멀리 갈 수 있듯, 투자 동료와의 정보 교환은 도움이 될 거예요.",
"황금빛 햇살처럼, 투자의 긍정적인 에너지가 당신에게 행운을 가져다줄 거예요.",
"서두르지 않는 발걸음이 결국 목적지에 도착하듯, 인내심 있는 투자가 성공할 거예요.",
"튼튼한 다리처럼, 안정적인 투자는 미래를 든든하게 지탱해 줄 거예요.",
"아름다운 꽃밭처럼, 다양한 투자 포트폴리오는 아름다운 결실을 맺을 거예요.",
"깊은 샘물처럼, 꾸준한 학습은 투자 지혜를 샘솟게 할 거예요.",
"현명한 농부처럼, 때를 알고 투자하는 것이 중요해요.",
"조각칼로 다듬듯, 투자를 꾸준히 관리하면 가치가 빛날 거예요.",
"등대처럼, 정확한 정보는 투자 방향을 제시해 줄 거예요.",
"그물처럼, 넓게 펼친 투자는 위험을 분산시켜 줄 거예요.",
"맛있는 열매처럼, 투자의 달콤한 결실을 맛보게 될 거예요.",
"든든한 울타리처럼, 투자 원칙을 지키는 것이 중요해요.",
"지혜로운 스승처럼, 전문가의 조언을 참고하는 것이 도움이 될 거예요.",
"탐험가의 지도처럼, 투자 분석 도구는 길을 안내해 줄 거예요.",
"솟아나는 샘물처럼, 새로운 아이디어가 투자 기회를 만들어낼 수 있어요.",
"맑은 거울처럼, 자신의 투자 성향을 정확히 파악해야 해요.",
"튼튼한 기둥처럼, 장기적인 관점이 안정적인 투자를 가능하게 해요.",
"조용한 숲 속처럼, 복잡한 시장 상황 속에서도 평정심을 유지하세요.",
"숙련된 장인처럼, 능숙한 투자 기술은 성공을 가져다줄 거예요.",
"따뜻한 햇볕처럼, 긍정적인 전망이 투자 성과를 높여줄 거예요.",
"흐르는 시냇물처럼, 작은 이익도 꾸준히 모으면 큰 자산이 될 거예요.",
"굳건한 성처럼, 위기에 흔들리지 않는 투자 전략이 필요해요.",
"현명한 여행자처럼, 투자 전에 충분한 정보를 수집하세요.",
"잘 짜인 그물처럼, 체계적인 투자 계획이 중요해요.",
"값진 보석처럼, 숨겨진 가치에 투자하는 안목을 키우세요.",
"믿음직한 동반자처럼, 장기 투자는 든든한 자산이 되어줄 거예요.",
"푸른 초원처럼, 넓은 시야로 투자 기회를 바라보세요.",
"힘찬 날갯짓처럼, 과감한 투자가 큰 성장을 가져올 수 있어요.",
"조용한 밤하늘의 별처럼, 빛나는 아이디어가 투자를 성공으로 이끌 거예요.",
"풍요로운 가을 들판처럼, 투자의 결실을 풍성하게 맺을 거예요.",
"굽이치는 강물처럼, 시장의 변화에 유연하게 대응하세요.",
"굳건한 나무처럼, 시간이 지날수록 가치가 더해지는 투자를 하세요.",
"분산 투자, 리스크 관리의 첫 걸음입니다.",
"코인은 마라톤, 단거리 경주가 아닙니다.",
"욕심은 손해를 부르는 법입니다.",
"시장은 항상 변동성이 있습니다, 준비가 필요합니다.",
"오래된 격언, '매수는 천천히, 매도는 신중하게.'",
"시장을 예측하는 것보다 대응하는 것이 중요합니다.",
"떨어질 때 사서, 오를 때 파는 것이 핵심입니다.",
"한 번의 실패가 당신을 좌절하게 두지 마세요.",
"감정이 아닌 분석으로 투자하세요.",
"장기적인 관점이 성공을 만듭니다.",
"차트를 믿지 말고, 기업의 가치를 보세요.",
"소문에 사서, 뉴스에 파는 건 위험합니다.",
"미래를 준비하는 자가 투자에서 승리합니다.",
"무리한 투자는 실패를 부릅니다.",
"확신이 없다면, 관망이 때로는 현명합니다.",
"시장은 당신의 인내심을 시험할 것입니다.",
"투자는 냉정해야지, 흥분해서는 안 됩니다.",
"기회는 준비된 사람에게만 옵니다.",
"패닉에 팔지 말고, 기회로 삼으세요.",
"잃지 않는 것이 이기는 첫걸음입니다.",
"코인 시장은 변동성이 큽니다, 신중하게 접근하세요.",
"투자는 분석, 도박은 감정입니다.",
"단기 변동에 휘둘리지 말고 장기적 관점을 가지세요.",
"모든 것을 걸지 말고, 항상 분산 투자하세요.",
"FOMO(기회를 놓칠까 두려워하는 마음)는 위험합니다.",
"항상 '잃을 수 있는 만큼'만 투자하세요.",
"한 순간의 상승이 영원하지 않음을 기억하세요.",
"코인은 잠재력도 크지만, 리스크도 큽니다.",
"시장이 좋을 때도 나쁠 때도 침착함을 유지하세요.",
"언제나 철저한 리서치 후에 투자하세요.",
"지나친 탐욕이 손실을 부를 수 있습니다.",
"항상 손절선을 정해두세요.",
"가격이 오를 때는 계획을, 내릴 때는 인내를.",
"항상 디지털 자산의 보안을 신경 쓰세요.",
"단기 수익에 집착하지 말고, 긴 호흡을 가지세요.",
"시장 변동은 피할 수 없으니, 대응할 준비를 하세요.",
"한 번의 실수로 모든 것을 잃을 수 있습니다.",
"무작정 쫓아가기보다, 타이밍을 기다리세요.",
"코인 투자, 배움이 없으면 도박에 가깝습니다.",
"지금장이 기회일 수 있지만, 무리한 베팅은 피하세요.",
"감정은 버리고, 냉철하게 판단하세요.",
"시장에 휘둘리지 말고, 자신의 계획을 지키세요.",
"하루에도 수십 번 변동, 인내가 필요합니다.",
"빠른 결정은 좋지만, 서두르지 마세요.",
"손절매는 두려워하지 말고, 계획대로 진행하세요.",
"작은 이익도 모이면 큰 수익이 됩니다.",
"너무 많은 트레이딩은 오히려 손실을 부를 수 있습니다.",
"단타의 성공은 꾸준한 분석에서 시작됩니다.",
"작은 신호도 놓치지 마세요.",
"수익은 쌓이지만, 리스크도 쌓입니다.",
"때로는 기다림이 최고의 전략입니다.",
"계획 없이 뛰어들면 패배합니다.",
"트렌드를 따라가되, 남들보다 한 발 앞서야 합니다.",
"항상 목표를 세우고 그 목표에 집중하세요.",
"시장은 언제나 당신을 시험할 것입니다.",
"탐욕을 억제하고, 냉정하게 대응하세요.",
"단기 성공에 취하지 마세요, 실패는 순식간입니다.",
"시장은 기회지만, 함정도 가득합니다.",
"성공의 비결은 꾸준한 학습과 차분한 대응입니다.",
"언제나 퇴장할 준비가 되어 있어야 합니다.",
"오늘의 작은 노력이 내일의 큰 성과로 이어진다.",
"당신의 마음속에 숨겨진 힘이 곧 세상을 변화시킬 것이다.",
"가까운 미래에 뜻밖의 기회가 찾아올 것이다.",
"지금은 침묵이 필요하지만 곧 당신의 목소리가 울려 퍼질 것이다.",
"어려운 길이지만 그 끝엔 특별한 보상이 기다리고 있다.",
"오늘의 선택이 내일의 행복을 결정한다.",
"어려운 상황에서 당신의 용기가 빛을 발할 것이다.",
"사랑은 가장 간단한 것에서 시작된다.",
"잠시 멈추어도 괜찮다. 중요한 것은 다시 일어나는 것이다.",
"당신의 열정이 세상에 큰 영향을 미칠 것이다.",
"마음을 열면 새로운 기회가 보일 것이다.",
"작은 성취도 큰 의미를 갖는다.",
"주변 사람들과의 조화가 당신의 미래를 밝게 만든다.",
"내일은 오늘보다 더 좋은 날이 될 것이다.",
"지나친 걱정은 오늘의 행복을 빼앗을 뿐이다.",
"이 순간의 고통은 곧 멋진 성장을 위한 밑거름이 된다.",
"자신감을 가지면, 세상은 당신의 손안에 있다.",
"중요한 변화는 언제나 갑작스럽게 찾아온다.",
"지금의 인내가 당신을 더 강하게 만들 것이다.",
"길을 잃어도, 결국 자신만의 길을 찾게 될 것이다.",
"새로운 사람들과의 만남이 큰 전환점을 이룰 것이다.",
"가까운 이들에게 따뜻한 마음을 전하는 것이 중요하다.",
"지혜는 경험에서 비롯된다.",
"운명은 준비된 사람에게 미소를 지을 것이다.",
"사랑은 언제나 자신을 돌아보게 만든다.",
"당신의 친절은 곧 돌아와 당신을 행복하게 할 것이다.",
"무엇보다 중요한 것은 당신의 마음의 평화이다.",
"어려운 결정을 내릴 때, 마음의 소리를 듣는 것이 중요하다.",
"이번 주는 예상치 못한 기회가 다가올 것이다.",
"당신의 미래는 이미 준비되어 있다. 다가올 기회를 놓치지 마라.",
"당신의 인내가 큰 성공으로 이어질 것이다.",
"과거의 실수는 미래의 지혜로 변할 것이다.",
"행복은 자신을 이해하고 받아들이는 것에서 시작된다.",
"어디에서든 당신은 그 자리에 있어야 할 이유가 있다.",
"가장 어두운 시간에 당신의 진정한 힘이 나타난다.",
"당신의 긍정적인 에너지가 주변 사람들에게 영향을 미친다.",
"사소한 것들이 결국 큰 변화를 일으킨다.",
"내일의 자신에게 믿음을 가지면 오늘을 더 잘 살 수 있다.",
"결정적인 순간에 당신은 늘 정확한 선택을 할 것이다.",
"끊임없는 도전이 결국 큰 기회로 다가온다.",
"우리가 찾고 있는 답은 이미 내 안에 있다.",
"새로운 시작은 항상 두려움과 함께 온다, 그러나 그것이 성장이다.",
"자신을 믿으면 세상도 당신을 믿게 될 것이다.",
"작은 변화가 큰 결과를 만든다.",
"어려운 결정을 내린 후, 그 선택이 당신을 성장시킨다.",
"다른 사람들의 기대보다는 자신의 마음을 따르라.",
"결과보다는 과정을 즐기는 것이 진정한 행복이다.",
"불안감은 당신이 성장하고 있다는 신호이다.",
"당신의 길은 당신이 만든다. 두려워하지 말라.",
"모든 일은 때가 되면 해결된다.",
"자신이 가진 것을 소중히 여기면, 더 많은 기회가 찾아온다.",
"세상의 모든 것이 연결되어 있다는 사실을 기억하라.",
"당신의 성실함은 결국 큰 결실을 맺을 것이다.",
"자신의 진심을 전하면, 그 사람도 당신의 진심을 느낄 것이다.",
"당신의 꿈은 당신이 믿을 때 현실이 된다.",
"삶은 선택의 연속이다. 그리고 그 선택들이 당신을 만들 것이다.",
"모든 일은 그 자체로 의미가 있다. 그 의미를 찾아보라.",
"진정한 용기는 고난 속에서도 희망을 놓지 않는 것이다.",
"하루하루의 작은 발걸음이 큰 변화로 이어진다.",
"당신의 열정이 당신을 더 강하게 만든다.",
"내일의 당신은 오늘의 결정을 기억할 것이다."
];

const mupho = [
"오늘은 롱",
"오늘은 숏",
"오늘은 오름 숏",
"오늘은 약보합 하락장세",
"오늘은 약보합 상승장세",
"오늘은 떡락장",
"오늘은 내림 롱",
"오늘은 횡보"
];

const mukmenu = [
"비빔밥",
"김치찌개",
"된장찌개",
"불고기",
"갈비찜",
"제육볶음",
"닭갈비",
"오징어볶음",
"해물파전",
"떡볶이",
"잡채",
"우동",
"스파게티",
"카레라이스",
"샌드위치",
"퀘사디아",
"토스트",
"파스타",
"볶음밥",
"유부초밥",
"초밥",
"생선구이",
"치킨너겟",
"핫윙",
"버거",
"핫도그",
"피자",
"리조또",
"나초",
"떡국",
"칼국수",
"짬뽕",
"볶음면",
"쌀국수",
"바지락칼국수",
"수제비",
"계란찜",
"오므라이스",
"순두부찌개",
"고등어조림",
"동태찌개",
"소불고기",
"매운탕",
"회덮밥",
"생선회",
"튀김",
"감자탕",
"뼈해장국",
"김밥",
"닭개장",
"연어구이",
"소세지구이",
"미트볼",
"파전",
"차돌박이",
"사시미",
"그라탕",
"치킨 샐러드",
"훈제 연어",
"그릴드 치킨",
"코울슬로",
"렌틸콩 샐러드",
"오이소박이",
"채소 스프",
"바나나 스무디",
"과일 샐러드",
"감자 샐러드",
"카프레제 샐러드",
"브로콜리 샐러드",
"퀴노아 샐러드",
"크림파스타",
"리얼 멕시칸 타코",
"커리 우동",
"짜장면",
"짬뽕밥",
"갈비탕",
"차돌박이 찌개",
"자장면",
"동치미 국수",
"아귀찜",
"양념치킨",
"쌈밥",
"카레 우동",
"고추장 찌개",
"샤브샤브",
"회국수",
"쇠고기 미역국",
"버섯 리조또",
"훈제 닭고기 샐러드",
"퀘사디아",
"바베큐 립",
"스시 롤",
"전복죽",
"해장국",
"영양밥",
"찹쌀탕수육",
"멕시칸 볶음밥",
"순대국",
"깻잎전",
"쌀국수 샐러드",
"해물볶음밥",
"육회비빔밥",
"돈까스",
"만두국",
"오징어덮밥",
"연어 덮밥",
"치킨 카레",
"베이컨 에그",
"아메리칸 브렉퍼스트",
"스테이크",
"채소볶음",
"두부조림",
"카레 빵",
"고기국수",
"소고기 볶음",
"새우튀김",
"잡곡밥",
"해물탕",
"곱창전골",
"순대볶음",
"퀘사디아 (버섯)",
"김치 볶음밥",
"아보카도 토스트",
"코코넛 카레",
"피쉬앤칩스",
"시금치 리조또",
"두부 샐러드",
"고추장 불고기",
"템푸라",
"브리또",
"제철 해산물 스튜",
"크로크무슈",
"스시 샐러드",
"토마토 파스타",
"바질 페스토 파스타",
"양배추 샐러드",
"고추 잡채",
"버섯 탕수육",
"마파두부",
"크리미치킨파스타",
"한방 삼계탕",
"멕시칸 부리또",
"배추전",
"연두부",
"시래기국",
"바나나 팬케이크",
"쭈꾸미 볶음",
"볶음우동",
"파프리카 스튜",
"낙지볶음",
"마늘 볶음밥",
"강된장찌개",
"소고기 무국",
"카프레제 샐러드",
"미트 파이",
"소시지 파스타",
"해물 샤브샤브",
"연어 스테이크",
"아귀찜",
"가지 볶음",
"고소한 고구마 스프",
"포케",
"스팸 김밥",
"제주 흑돼지 구이",
"차돌된장찌개",
"멕시칸 타코",
"오렌지 치킨",
"피망 볶음",
"콩나물국",
"해물 누룽지탕",
"고추전",
"버터 치킨",
"키쉬",
"검은콩밥",
"배추김치전",
"고등어 무조림",
"양송이 크림스프",
"모둠회",
"찜닭",
"애호박전",
"청경채 볶음",
"훈제 삼겹살",
"미역줄기 볶음",
"세비체",
"피자 토스트",
"방울토마토 샐러드",
"연근 조림",
"갈릭 새우",
"모듬 샐러드",
"아스파라거스 볶음",
"간장계란밥",
"쌀국수 볶음",
"리코타 치즈 샐러드",
"파히타",
"새우 크림 파스타",
"된장 비빔국수",
"미소 된장국",
"샤브샤브 샐러드",
"칠리 새우",
"햄버거 스테이크",
"토마토 치킨 파스타",
"버섯 크림 스프",
"가츠동",
"삼겹살 구이",
"이탈리안 샌드위치",
"매운 갈비찜",
"치킨 샐러드 랩",
"시금치 치즈 오믈렛",
"부리또 볼",
"도시락",
"햄 스크램블 에그",
"홍합 스튜",
"오리불고기",
"야채튀김",
"차돌박이 구이",
"단호박 스프",
"순두부 비빔밥",
"스파이시 피쉬 타코",
"과일 스무디",
"해물 미역국",
"칼국수 스프",
"굴전",
"가지 마리네이드",
"고구마 맛탕",
"연어 훈제 샐러드",
"새우 페스토 파스타",
"닭가슴살 샐러드",
"훈제 오리",
"떡볶이 스프",
"떡갈비",
"고구마 스프",
"전주 비빔밥",
"미소된장국",
"민트 요구르트",
"콩국수",
"쇠고기 불고기",
"연어 타르타르",
"자장면 볶음",
"비프 웰링턴",
"해물 볶음 국수",
"오징어 무침",
"야채 스프",
"식빵 피자",
"버터 리조또",
"파스타 샐러드",
"고추 잡채 볶음",
"치킨 패터",
"아보카도 연어 샐러드",
"낙지 비빔밥",
"양상추 샐러드",
"다시마국",
"시금치 된장국",
"무생채",
"닭고기와 퀴노아 샐러드",
"김치전",
"감자와 소시지 볶음",
"타코 샐러드",
"고구마 마요네즈 샐러드",
"다진 소고기 볶음",
"레몬 치킨",
"모둠 전",
"두부 스테이크",
"찜닭 카레",
"크림치즈 브리또",
"해물 전",
"굴비",
"전복 샤브샤브",
"양념 소세지",
"라따뚜이",
"파르메산 치킨",
"콩나물 볶음",
"바나나 크레페",
"두부와 야채 볶음",
"훈제 생선 샐러드",
"비빔 냉면",
"크림소스 리조또",
"팟타이",
"치킨 타코",
"김치 볶음 우동",
"홍합국",
"메밀국수",
"버터넛 스쿼시 스프",
"코코넛 새우",
"브로콜리 스프",
"매운 소고기 스튜",
"고기 카레",
"파인애플 볶음밥",
"해물 크림 파스타",
"치킨 수프",
"매운 소고기 볶음",
"탕수육",
"참치 샐러드",
"검은콩 스프",
"안동찜닭",
"고추장 돼지고기",
"시금치 오믈렛",
"냉면"
];

const koreanNames = [
"비트코인",
"이더리움",
"네오",
"메탈",
"리플",
"이더리움클래식",
"스테이터스네트워크토큰",
"웨이브",
"넴",
"퀀텀",
"리스크",
"스팀",
"스텔라루멘",
"아더",
"아크",
"스토리지",
"그로스톨코인",
"에이다",
"스팀달러",
"파워렛저",
"비트코인골드",
"아이콘",
"이오스",
"트론",
"시아코인",
"온톨로지",
"질리카",
"폴리매쉬",
"제로엑스",
"룸네트워크",
"비트코인캐시",
"베이직어텐션토큰",
"아이오에스티",
"시빅",
"아이큐",
"아이오타",
"하이파이",
"온톨로지가스",
"가스",
"체인바운티",
"엘프",
"카이버네트워크",
"비트코인에스브이",
"쎄타토큰",
"쿼크체인",
"비트토렌트",
"모스코인",
"쎄타퓨엘",
"디센트럴랜드",
"앵커",
"아르고",
"코스모스",
"썬더코어",
"게임빌드",
"무비블록",
"왁스",
"헤데라",
"메디블록",
"밀크",
"에스티피",
"오브스",
"비체인",
"칠리즈",
"스톰엑스",
"디카르고",
"하이브",
"카바",
"아하토큰",
"체인링크",
"테조스",
"보라",
"저스트",
"크로노스",
"토카막네트워크",
"솔라",
"헌트",
"폴카닷",
"엠블",
"스트라티스",
"알파쿼크",
"골렘",
"메타디움",
"피르마체인",
"코박토큰",
"샌드박스",
"히포크랏",
"도지코인",
"스트라이크",
"펀디엑스",
"플로우",
"엑시인피니티",
"스택스",
"이캐시",
"솔라나",
"폴리곤에코시스템토큰",
"에이브",
"1인치네트워크",
"알고랜드",
"니어프로토콜",
"아발란체",
"쓰레스홀드",
"셀로",
"스테픈",
"앱토스",
"시바이누",
"마스크네트워크",
"아비트럼",
"멀티버스엑스",
"수이",
"더그래프",
"블러",
"이뮤터블엑스",
"세이",
"미나",
"크레딧코인",
"아스타",
"스페이스아이디",
"피스네트워크",
"맨틀",
"아카시네트워크",
"제타체인",
"바운스토큰",
"스타게이트파이낸스",
"빔",
"타이코",
"테더",
"온도파이낸스",
"레이어제로",
"블라스트",
"주피터",
"이더리움네임서비스",
"그래비티",
"펜들",
"에이셔",
"유에스디코인",
"유엑스링크",
"빅타임",
"너보스",
"웜홀",
"카브",
"인젝티브",
"캣인어독스월드",
"유니스왑",
"세이프",
"드리프트",
"어드벤처골드",
"페페",
"봉크",
"렌더토큰",
"무브먼트",
"매직에덴",
"모카버스",
"바나",
"소닉SVM",
];

const accessories = [
"목걸이",
"반지",
"귀걸이",
"팔찌",
"시계",
"헤어핀",
"헤어밴드",
"벨트",
"선글라스",
"모자",
"스카프",
"장갑",
"타이",
"넥타이",
"핀",
"포켓스퀘어",
"애장품",
"브로치",
"귀찌",
"손목시계",
"핀턱",
"이어링",
"목도리",
"슬리브",
"목걸이 체인",
"가방",
"핸드백",
"숄더백",
"클러치백",
"백팩",
"파우치",
"지갑",
"카드지갑",
"키링",
"스톨",
"장식핀",
"반다나",
"도시락백",
"팔찌 세트",
"피어싱",
"고리 귀걸이",
"체인 팔찌",
"벨트백",
"수건",
"머리띠",
"모자 핀",
"캡",
"버킷햇",
"야구모자",
"스카프링",
"아이웨어",
"베레모",
"기관단총",
"저격총",
"싸울아비장검",
"황금방패",
"절대반지지"
];

const shoes = [
"스니커즈",
"로퍼",
"구두",
"부츠",
"샌들",
"슬리퍼",
"힐",
"플랫 슈즈",
"밴딩 슈즈",
"슬링백",
"컨버스",
"레인부츠",
"운동화",
"웨지힐",
"드라이빙 슈즈",
"앵클 부츠",
"슬립온",
"하이힐",
"로우힐",
"메리제인",
"펌프스",
"더비 슈즈",
"옥스포드",
"첼시 부츠",
"크록스",
"하프 부츠",
"슬라이드 샌들",
"스포티 샌들",
"밴드 샌들",
"스니커즈 부츠",
"트레킹 슈즈",
"레더 부츠",
"워커 부츠",
"에스파드리유",
"플립플랍",
"기타 샌들",
"키높이 운동화",
"피지컬 슈즈",
"웨더 부츠",
"소프트 슈즈",
"골프화",
"축구화",
"야구화",
"배구화",
"슬링백 힐",
"웨딩 슈즈",
"애슬레틱 슈즈",
"러닝화",
"스카이힐",
"비치 슈즈",
"맨발의 청춘",
"짚신",
"헤르메스 날개 신발",
"뽁뽁이 신발(뽁뽁소리나야됨)",
"삼선 슬리퍼",
"쪼리리"
];

const bottoms = [
"청바지",
"슬랙스",
"면바지",
"트레이닝 팬츠",
"레깅스",
"조거 팬츠",
"카고 팬츠",
"쇼츠",
"스커트",
"미니 스커트",
"롱 스커트",
"펜슬 스커트",
"플리츠 스커트",
"A라인 스커트",
"진",
"스키니진",
"와이드 팬츠",
"부츠컷 팬츠",
"하이웨이스트 팬츠",
"미디 스커트",
"배기 바지",
"벨벳 팬츠",
"레더 팬츠",
"플레어 팬츠",
"슬림핏 바지",
"니트 팬츠",
"리넨 팬츠",
"조리",
"배기 바지",
"슬릿 스커트",
"세미 부츠컷",
"컬러 바지",
"인조 가죽 바지",
"하이넥 팬츠",
"체크 팬츠",
"스트라이프 팬츠",
"벨트 팬츠",
"단추 팬츠",
"포켓 팬츠",
"오버사이즈 바지",
"카프리 팬츠",
"스판 바지",
"와이드 레그 팬츠",
"밴딩 팬츠",
"플로랄 팬츠",
"테이퍼드 팬츠",
"애슬레저 팬츠",
"스웨이드 팬츠",
"청반바지",
"트임 스커트",
"온니팬츠",
"누드",
"비닐바지"
];

const tops = [
"티셔츠",
"셔츠",
"블라우스",
"후디",
"스웨트셔츠",
"맨투맨",
"폴로 셔츠",
"타이셔츠",
"니트",
"크롭탑",
"롱슬리브",
"반팔티",
"긴팔티",
"저지 티셔츠",
"탑",
"캐미솔",
"브라탑",
"디자이너 티셔츠",
"슬리브리스",
"셔츠드레스",
"보디수트",
"스카프 탑",
"오프숄더 탑",
"리브 니트",
"버튼다운 셔츠",
"리넨 셔츠",
"트위드 탑",
"플라워 탑",
"스트라이프 셔츠",
"하이넥 티셔츠",
"로우넥 탑",
"조끼",
"기모 맨투맨",
"기본 티셔츠",
"롱탑",
"허리끈 탑",
"컬러블록 탑",
"체크 셔츠",
"데님 셔츠",
"퍼프 소매 탑",
"카디건",
"트렌치 탑",
"케이블 니트",
"자수 티셔츠",
"니트 탑",
"슬림핏 셔츠",
"오버사이즈 티셔츠",
"레터링 티셔츠",
"레이스 탑",
"폴라 니트",
"누드",
"시스루",
"언더브라",
"언더븁",
"한복",
"갑옷",
"방탄복"
];

const outerTypes = [
"피코크",
"다운",
"후디",
"코트",
"자켓",
"패딩",
"트렌치코트",
"바람막이",
"블레이저",
"맨투맨",
"기모",
"테디코트",
"블루종",
"롱코트",
"숏코트",
"레인코트",
"사파리 자켓",
"바이커 자켓",
"체스터필드 코트",
"퍼 자켓",
"캐시미어 코트",
"트위드 자켓",
"플리스 자켓",
"일자코트",
"피크드 라펠 자켓",
"그레이코트",
"모직 자켓",
"캔버스 자켓",
"파카",
"마운틴 자켓",
"스포츠 자켓",
"레더 자켓",
"코듀로이 자켓",
"체크 자켓",
"헐리우드 코트",
"시몬스 자켓",
"비즈니스 자켓",
"테크 자켓",
"롱 후디",
"캠프 자켓",
"벤틀리 코트",
"캐주얼 자켓",
"프리미엄 자켓",
"경량 패딩",
"여름 자켓",
"겨울 파카",
"정장 자켓",
"허리 길이 자켓",
"플라워 자켓",
"카고 자켓",
"힙합 자켓",
"없음",
"곤룡포",
"투명 망토",
"천사의 날개"
];

function numberToKorean(number){
var inputNumber = number < 0 ? false : number;
var unitWords = ['', '만', '억', '조', '경'];
var splitUnit = 10000;
var splitCount = unitWords.length;
var resultArray = [];
var resultString = '';

for (var i = 0; i < splitCount; i++){
var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
unitResult = Math.floor(unitResult);
if (unitResult > 0){
resultArray[i] = unitResult;
}
}

for (var i = 0; i < resultArray.length; i++){
if(!resultArray[i]) continue;
resultString = String(numberFormat(resultArray[i])) + unitWords[i] + resultString;
}

return resultString;
}

var cname = [
"BTC" ,"ETH" ,"ETC" ,"XRP" ,"BCH" ,"QTUM" ,
"BTG" ,"EOS" ,"ICX" ,"TRX" ,"ELF" ,"KNC" ,
"GLM" ,"ZIL" ,"WAXP" ,"POWR" ,"LRC" ,"STEEM" ,
"STRAX" ,"ZRX" ,"REP" ,"SNT" ,"ADA" ,"CTXC" ,
"BAT" ,"THETA" ,"LOOM" ,"WAVES" ,"LINK" ,"ENJ" ,
"VET" ,"MTL" ,"IOST" ,"QKC" ,"ATOLO" ,"AMO" ,"BSV" ,
"ORBS" ,"TFUEL" ,"VALOR" ,"CON" ,"ANKR" ,"MIX" ,
"CRO" ,"FX" ,"CHR" ,"MBL" ,"MXC" ,"FCT2" ,"TRV" ,
"WOM" ,"BOA" ,"MEV" ,"SXP" ,"COS" ,"EL" ,"HIVE" ,
"XPR" ,"VRA" ,"FIT" ,"EGG" ,"BORA" ,"ARPA" ,"CTC" ,
"APM" ,"CKB" ,"AERGO" ,"CENNZ" ,"EVZ" ,"QTCON" ,
"UNI" ,"YFI" ,"UMA" ,"AAVE" ,"COMP" ,"REN" ,"BAL" ,
"RSR" ,"NMR" ,"RLC" ,"UOS" ,"SAND" ,"STPT" ,"GOM2" ,"BEL" ,
"OBSR" ,"ORC" ,"POLA" ,"ADP" ,"DVI" ,"GHX" ,"MVC" ,"BLY" ,
"WOZX" ,"ANV" ,"GRT" ,"BIOT" ,"SNX" ,"SOFI" ,"GRACY" ,"OXT" ,
"LINA" ,"MAP" ,"AQT" ,"PLA" ,"WIKEN" ,"CTSI" ,"MANA" ,"LPT" ,
"MKR" ,"SUSHI" ,"ASM" ,"PUNDIX" ,"CELR" ,"ARW" ,"FRONT" ,"RLY" ,
"OCEAN" ,"BFC" ,"ALICE" ,"OGN" ,"COTI" ,"CAKE" ,"BNT" ,
"XVS" ,"SWAP" ,"CHZ" ,"AXS" ,"DAO" ,"SIX" ,"DAI" ,"SHIB" ,
"MATIC" ,"WOO" ,"ACH" ,"VELO" ,"XLM" ,"WICC" ,"ONT" ,
"META" ,"KLAY" ,"ONG" ,"ALGO" ,"JST" ,"XTZ" ,"MLK" ,"DOT" ,
"ATOM" ,"SSX" ,"TEMCO" ,"DOGE" ,"KSM" ,"CTK" ,"XYM" ,"BNB" ,
"NFT" ,"SUN" ,"XEC" ,"SOL" ,"LN" ,"EGLD" ,"GO" ,"DFA" ,"C98" ,
"MED" ,"BOBA" ,"DYDX" ,"FLOW" ,"GALA" ,"BTT" ,"EFI" ,"JASMY" ,
"TITAN" ,"REQ" ,"CSPR" ,"AVAX" ,"TDROP" ,"FANC" ,"NPT" ,"REI" ,
"T" ,"MBX" ,"GMT" ,"TAVA" ,"DAR" ,"ALT" ,"XCN" ,"GXA" ,"AZIT" ,
"FLR" ,"SFP" ,"FITFI" ,"STAT" ,"CRTS" ,"VIX" ,"LBL" ,"FLZ" ,"LM" ,
"APT" ,"BLUR" ,"OAS" ,"HOOK" ,"ONIT" ,"OP" ,"GMX" ,"XPLA" ,"ARB" ,
"INJ" ,"RPL" ,"CFX" ,"LDO" ,"SUI"
];

function symbolcheck(symbol) {
var find = false;
for (var i = 0; i < cname.length; i++) {
if (symbol.toLowerCase() === cname[i].toLowerCase()) {
find = true;
break;
}
}
return find;
}

function bithumb_price(symbol) {
var data = "";
data = Utils.getWebText("https://api.bithumb.com/public/ticker/" + symbol);
data = data.split("closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
return " : ￦" + data.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n";
}

function sotso_calcul(data)
{

if (!data.includes(".")) {
        return data;
    }

var price = data.split(".")[0];
var sotso = data.split(".")[1].slice(0, 4);

var realsotso
if (sotso === "0000") {
realsotso = "";
} else {
if (price.length > 2) {
realsotso = "";
} else {
if (sotso.endsWith('00')) {
sotso = sotso.slice(0, -2);
}
realsotso = "." + sotso;
}
}

return price + realsotso;
}

function upbit_rate_str(data) {
var result;

var signed_change_rate = data.split("signed_change_rate")[1].split(":")[1].split(",")[0];
var change_rate = data.split("change_rate")[1].split(":")[1].split(",")[0];

var signed = "-";
if (signed_change_rate.slice(0,1) === "0") {
signed = "+";
}

var rate = sotso_calcul(change_rate) * 100;

result = signed + rate.toFixed(2) + "% | ";

return result;
}

function upbit_rate(symbol) {
var result;
var data = "";

try {
data = Utils.getWebText("https://api.upbit.com/v1/ticker?markets=" + symbol);
} catch (error){
return "error";
}

var signed_change_rate = data.split("signed_change_rate")[1].split(":")[1].split(",")[0];
var change_rate = data.split("change_rate")[1].split(":")[1].split(",")[0];

var signed = "-";
if (signed_change_rate.slice(0,1) === "0") {
signed = "+";
}

var rate = sotso_calcul(change_rate) * 100;

result = signed + rate.toFixed(2) + "% | ";

return result;
}

function upbit_all_price() {
var result = "";
var data = "";
try {
data = Utils.getWebText("https://api.upbit.com/v1/ticker/all?quote_currencies=KRW");
} catch (error){
return "error";
}

var btc = data.split("KRW-BTC")[1];
var eth = data.split("KRW-ETH")[1];
var xrp = data.split("KRW-XRP")[1];
var atom = data.split("KRW-ATOM")[1];
var ada = data.split("KRW-ADA")[1];
var sol = data.split("KRW-SOL")[1];
var doge = data.split("KRW-DOGE")[1];
var sui = data.split("KRW-SUI")[1];
var avax = data.split("KRW-AVAX")[1];
var ondo = data.split("KRW-ONDO")[1];
var ens = data.split("KRW-ENS")[1];
var link = data.split("KRW-LINK")[1];

result += "비트코인" + upbit_info_str(btc);
result += "\n이더리움" + upbit_info_str(eth);
result += "\n리플 " + upbit_info_str(xrp);
result += "\n코스모스" + upbit_info_str(atom);
result += "\n에이다 " + upbit_info_str(ada);
result += "\n솔라나 " + upbit_info_str(sol);
result += "\n도지코인" + upbit_info_str(doge);
result += "\n수이" + upbit_info_str(sui);
result += "\n야발란체" + upbit_info_str(avax);
result += "\n온도파이낸스" + upbit_info_str(ondo);
result += "\n이더네임서비스" + upbit_info_str(ens);
result += "\n체인링크" + upbit_info_str(link);

return result;
}

function upbit_all_rate() {
var result = "";
var data = "";

try {
data = Utils.getWebText("https://api.upbit.com/v1/ticker/all?quote_currencies=KRW");
} catch (error){
return "error";
}

var btc = data.split("KRW-BTC")[1];
var eth = data.split("KRW-ETH")[1];
var xrp = data.split("KRW-XRP")[1];
var atom = data.split("KRW-ATOM")[1];
var ada = data.split("KRW-ADA")[1];
var sol = data.split("KRW-SOL")[1];
var doge = data.split("KRW-DOGE")[1];
var sui = data.split("KRW-SUI")[1];
var avax = data.split("KRW-AVAX")[1];
var ondo = data.split("KRW-ONDO")[1];

result += upbit_rate_str(btc) + " | 비트코인";
result += "\n" + upbit_rate_str(eth) + " | 이더리움";
result += "\n" + upbit_rate_str(xrp) + " | 리플";
result += "\n" + upbit_rate_str(atom) + " | 코스모스";
result += "\n" + upbit_rate_str(ada) + " | 에이다";
result += "\n" + upbit_rate_str(sol) + " | 솔라나";
result += "\n" + upbit_rate_str(doge) + " | 도지코인";
result += "\n" + upbit_rate_str(sui) + " | 수이";
result += "\n" + upbit_rate_str(avax) + " | 야발란체체";
result += "\n" + upbit_rate_str(ondo) + " | 온도파이낸스스";

return result;
}

function upbit_info_str(data) {
var result;

var change_rate = data.split("change_rate")[1].split(":")[1].split(",")[0];
var signed_change_rate = data.split("signed_change_rate")[1].split(":")[1].split(",")[0];
var ori_price = data.split("trade_price")[1].split(":")[1].split(",")[0];
var price = ori_price.split(".")[0];
var sotso = ori_price.split(".")[1].slice(0, 4);

var realsotso
if (sotso === "0000") {
realsotso = "";
} else {
if (price.length > 2) {
realsotso = "";
} else {
if (sotso.endsWith('00')) {
sotso = sotso.slice(0, -2);
}
realsotso = "." + sotso;
}
}

var signed = "-";
if (signed_change_rate.startsWith('0')) {
signed = "+";
}

var rate = sotso_calcul(change_rate) * 100;

result = " : " + signed + rate.toFixed(2) + "% | " + "￦" +
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + realsotso + "원";

return result;
}

function upbit_info(symbol) {
var result;
var data = "";

try {
data = Utils.getWebText("https://api.upbit.com/v1/ticker?markets=" + symbol);
} catch (error){
return "error";
}

var change_rate = data.split("change_rate")[1].split(":")[1].split(",")[0];
var signed_change_rate = data.split("signed_change_rate")[1].split(":")[1].split(",")[0];
var ori_price = data.split("trade_price")[1].split(":")[1].split(",")[0];
var price = ori_price.split(".")[0];
var sotso = ori_price.split(".")[1].slice(0, 4);

var realsotso
if (sotso === "0000") {
realsotso = "";
} else {
if (price.length > 2) {
realsotso = "";
} else {
if (sotso.endsWith('00')) {
sotso = sotso.slice(0, -2);
}
realsotso = "." + sotso;
}
}

var signed = "-";
if (signed_change_rate.startsWith('0')) {
signed = "+";
}

var rate = sotso_calcul(change_rate) * 100;

result = " : " + signed + rate.toFixed(2) + "% | " + "￦" +
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + realsotso + "원";

return result;
}

function price() {
var result = "================\nRizon Validator Club\nCurrent Price\n================\n";

result += bithumb_price("atolo");
result += "\n================\nCoin Current Price(bithumb)\n================\n";
result += bithumb_price("btc");
result += bithumb_price("eth");
result += bithumb_price("xrp");
result += bithumb_price("atom");
result += bithumb_price("ada");
result += bithumb_price("sol");
result += bithumb_price("klay");
result += bithumb_price("med");

return result;
}

function total_c(symbol) {
var result = "============\nRizon Validator\nClub Total Status\n============\n";
var data = "";
let closep;
let openp;
let rate;
let prev_closing_price
let max_price;
let min_price;
let units_traded;
let acc_trade_value;
let units_traded_24;
let acc_trade_value_24;
let flucate_24;
let flucate_rate_24;

data = Utils.getWebText("https://api.bithumb.com/public/ticker/" + symbol);
openp = data.split("prev_closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
closep = data.split("closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
rate = (closep - openp) / openp * 100;
prev_closing_price = data.split("prev_closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
max_price = data.split("max_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
min_price = data.split("min_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
units_traded = data.split("units_traded")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
acc_trade_value = data.split("acc_trade_value")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
units_traded_24 = data.split("units_traded_24H")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
acc_trade_value_24 = data.split("acc_trade_value_24H")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
flucate_24 = data.split("fluctate_24H")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
flucate_rate_24 = data.split("fluctate_rate_24H")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");

result += symbol + " - \n시작가 : " + openp.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n"
result += "현재가 : " + closep.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" + "등락률 : " + Math.round(rate * 100) / 100 + "%\n\n";
result += "전일 종가 : " + prev_closing_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n";
result += "최고가(00시 기준) : " + max_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n"
result += "최저가(00시 기준) : " + min_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n\n";
result += "거래량(00시 기준) : " + numberToKorean(units_traded) + "개\n";
result += "거래 금액 (00시 기준) : " + numberToKorean(acc_trade_value) + "원\n\n";
result += "거래량(24시간 기준) : " + numberToKorean(units_traded_24) + "개\n";
result += "거래 금액 (24시간 기준) : " + numberToKorean(acc_trade_value_24) + "원\n\n";
result += "변동가(24시간 기준) : " + flucate_24.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n";
result += "변동률(24시간 기준) : " + flucate_rate_24.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "%\n";

return result;
}

function rate_c(symbol) {
var result = "";
var data = "";
let closep;
let openp;
let rate;

data = Utils.getWebText("https://api.bithumb.com/public/ticker/" + symbol);
openp = data.split("prev_closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
closep = data.split("closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
rate = (closep - openp) / openp * 100;
result += symbol + " - \n시작가 : " + openp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" + "현재가 : " + closep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" + "등락률 : " + Math.round(rate * 100) / 100 + "%\n";

return result;
}

function bithumb_price2(symbol) {
var data = "";
data = Utils.getWebText("https://api.bithumb.com/public/ticker/" + symbol);
data = data.split("closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");
return " : ￦" + data.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n";
}

function kimp(symbol) {
var data = "";
data = Utils.getWebText("https://api.bithumb.com/public/ticker/" + symbol);
data = data.split("closing_price")[1].split(":")[1].split(",")[0].replace("\"","").replace("\"","");

data2 = Utils.getWebText("https://api.gateio.ws/api/v4/spot/tickers?currency_pair=BTC_USDT");
data3 = Utils.getWebText("https://api.frankfurter.app/latest?from=USD");

price = data2.split("last")[1].split(",")[0].split("\"")[2].split("\"")[0];
current = data3.split("KRW")[1].split(":")[1].split(",")[0];
real = price * current;

manas = data - real;
kkp = (manas / real) * 100;

return "김프 : " + kkp.toFixed(3) + "%\n원화가 : " + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n해외가 : " + real.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";

}

function nasdaq() {
var reposn = "";
var result = "";
let closep;
let rate;
let current;

reposn = Utils.getWebText("https://query1.finance.yahoo.com/v8/finance/chart/^IXIC?region=US&lang=en-US");
current = reposn.split("regularMarketPrice")[1].split(",")[0].split("\"")[1].split(":")[1];
closep = reposn.split("previousClose")[1].split(",")[0].split("\"")[1].split(":")[1];

rate = (closep - current) / current * 100;

result = "나스닥 \n 지수 : " + current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n 어제종가 : " + closep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n 등락률 : " + Math.round(rate * 100) / 100 + "%\n";

return result;
}

function jongmok(symbol) {
var reposn = "";
var result = "";
let closep;
let rate;
let current;

reposn = Utils.getWebText("https://query1.finance.yahoo.com/v8/finance/chart/" + symbol + "?region=US&lang=en-US");
current = reposn.split("regularMarketPrice")[1].split(",")[0].split("\"")[1].split(":")[1];
closep = reposn.split("previousClose")[1].split(",")[0].split("\"")[1].split(":")[1];

rate = (closep - current) / current * 100;

result = symbol + "\n 현재 주가 : " + current + "\n 어제종가 : " + closep + "\n 등락률 : " + Math.round(rate * 100) / 100 + "%\n";

return result;
}

function jongmok_kr(symbol) {
var reposn = "";
var result = "";
let closep;
let rate;
let current;

reposn = Utils.getWebText("https://query1.finance.yahoo.com/v8/finance/chart/" + symbol + "?region=KR&lang=ko-KR");
current = reposn.split("regularMarketPrice")[1].split(",")[0].split("\"")[1].split(":")[1];
closep = reposn.split("previousClose")[1].split(",")[0].split("\"")[1].split(":")[1];

rate = (closep - current) / current * 100;

result = symbol + "\n 현재 주가 : " + current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n 어제 종가 : " + closep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "\n 등락률 : " + Math.round(rate * 100) / 100 + "%\n";

return result;
}

function mexc_price(symbol) {
var data = "";
var data2 = "";
var real = "";
var pr = "";
data = Utils.getWebText("https://www.mexc.com/open/api/v2/market/ticker");
//data2 = Utils.getWebText("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD");

price = data.split("ATOLO_USDT")[1].split("last")[1].split(",")[0].split("\"")[2].split("\"")[0];
//current = data2.split("basePrice")[1].split(":")[1].split(",")[0];
//real = (price * current).toFixed(3);
//real = price.toFixed(3);
//pr = real.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

return symbol + " : $" + price;
//return symbol + " : $" + real;
// + "\n" + "upbit 환율 API 기준 : " + current;
}

function gate_io_price(symbol) {
var data = "";
var data2 = "";
var real = "";
var pr = "";
data = Utils.getWebText("https://api.gateio.ws/api/v4/spot/tickers?currency_pair=" + symbol);
data2 = Utils.getWebText("https://finance.naver.com/marketindex/");

var price = data.split("last")[1].split(",")[0].split("\"")[2].split("\"")[0];
var current = data2.split("미국 USD")[1].split("MainListItem_price")[1].split("")[0].split(">")[1].split(".")[0].replace(",", "");
real = (price * current).toFixed(3);
// real = price.toFixed(3);
// pr = real.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// return symbol + " : $" + price + "/" + current;
return symbol + " : \n$" + price + "\n원화 : " + real + "원";
// + "\n" + "upbit 환율 API 기준 : " + current;
}

function attendance(sender) {
var result = "";
var randomidx = Date.now() % rollet.length;

result += "[ " + sender + " ]님의\n운세 : ";
result += rollet[randomidx];

return result;
}

function allco(sender) {
var result = "";
var randomidx = Date.now() % koreanNames.length;

result += "[ " + sender + " ]님의\n코인 : ";
result += koreanNames[randomidx];

return result;
}

function binance_full() {
var result = "";
var data = "";

data = Utils.getWebText("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
var price = data.split("price")[1].split("\"")[2].split(".")[0];
var onefix = price / 1000;
result += "BTC : $" + price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " 달러\n";
result += onefix.toFixed(2) + "K";

return result;
}

function sun_rait() {

var result = "";
var data = "";

data = Utils.getWebText("https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=BTCUSDT&period=1h&limit=1");
var longr = data.split("longAccount")[1].split(",")[0];
var minus = data.split("longShortRatio")[1].split(",")[0];
var shortr = data.split("shortAccount")[1].split(",")[0];

result = "\"롱 비율" + longr + "\n" +
         "\"숏 비율" + shortr + "\n" +
         "\"차이" + minus + "\n" +
        "바이낸스 1시간 롱숏 비율 기준";

return result;
}

function binance() {
var result = "";
var data = "";

data = Utils.getWebText("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");
var price = data.split("price")[1].split("\"")[2].split(".")[0];
var onefix = price / 1000;
result += onefix.toFixed(2) + "K";

return result;
}

function binance_e() {
var result = "";
var data = "";

data = Utils.getWebText("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT");
var price = data.split("price")[1].split("\"")[2].split(".")[0];
var onefix = price / 1000;
result += onefix.toFixed(2) + "K";

return result;
}

function choi_sin() {
var result = "";
var data = "";

data = Utils.getWebText("https://api.coinness.com/feed/v1/issue?limit=5");

var obj = data.split("},");
var title1 = obj[0].split("title")[1].split(":")[1].split("url")[0];
var title2 = obj[1].split("title")[1].split(":")[1].split("url")[0];
var title3 = obj[2].split("title")[1].split(":")[1].split("url")[0];
var title4 = obj[3].split("title")[1].split(":")[1].split("url")[0];
var title5 = obj[4].split("title")[1].split(":")[1].split("url")[0];

var data2 = Utils.getWebText("https://api.coinness.com/feed/v1/breaking-news");
var obj2 = data2.split("},");
var sub1 = obj2[0].split("title")[1].split(":")[1].split("content")[0];
var sub2 = obj2[1].split("title")[1].split(":")[1].split("content")[0];
var sub3 = obj2[2].split("title")[1].split(":")[1].split("content")[0];

result = "브레이킹 뉴스 \n1. " +
sub1.slice(0, -2) + "\n2. " +
sub2.slice(0, -2) + "\n3. " +
sub3.slice(0, -2) + "\n\n" +
"실기간 이슈 \n1. " +
title1.slice(0, -2) + "\n2. " +
title2.slice(0, -2) + "\n3. " +
title3.slice(0, -2) + "\n4. " +
title4.slice(0, -2) + "\n5. " +
title5.slice(0, -2) + "";
return result.replace("\\", "");
}

function silsigan() {
var result = "";

var data2 = Utils.getWebText("https://api.coinness.com/feed/v1/breaking-news");
var obj2 = data2.split("},");
var sub1 = obj2[0].split("title")[1].split(":")[1].split("content")[0];
var sub2 = obj2[1].split("title")[1].split(":")[1].split("content")[0];
var sub3 = obj2[2].split("title")[1].split(":")[1].split("content")[0];
var sub4 = obj2[3].split("title")[1].split(":")[1].split("content")[0];
var sub5 = obj2[4].split("title")[1].split(":")[1].split("content")[0];
var sub6 = obj2[5].split("title")[1].split(":")[1].split("content")[0];
var sub7 = obj2[6].split("title")[1].split(":")[1].split("content")[0];
var sub8 = obj2[7].split("title")[1].split(":")[1].split("content")[0];

result = "실시간 뉴스 \n\n1. " +
sub1.slice(0, -2) + "\n2. " +
sub2.slice(0, -2) + "\n3. " +
sub3.slice(0, -2) + "\n4. " +
sub4.slice(0, -2) + "\n5. " +
sub5.slice(0, -2) + "\n6. " +
sub6.slice(0, -2) + "\n7. " +
sub7.slice(0, -2) + "\n8. " +
sub8.slice(0, -2) + "";
return result.replace("\\", "");
}

function coinpan_info() {
var result = "";
var data = "";

data = Utils.getWebText("https://api.coinness.com/feed/v1/issue?limit=5");

var obj = data.split("},");
var title1 = obj[0].split("title")[1].split(":")[1].split("url")[0];
var title2 = obj[1].split("title")[1].split(":")[1].split("url")[0];
var title3 = obj[2].split("title")[1].split(":")[1].split("url")[0];
var title4 = obj[3].split("title")[1].split(":")[1].split("url")[0];
var title5 = obj[4].split("title")[1].split(":")[1].split("url")[0];

var data2 = Utils.getWebText("https://api.coinness.com/feed/v1/breaking-news");
var obj2 = data2.split("},");
var sub1 = obj2[0].split("title")[1].split(":")[1].split("content")[0];
var sub2 = obj2[1].split("title")[1].split(":")[1].split("content")[0];
var sub3 = obj2[2].split("title")[1].split(":")[1].split("content")[0];
var sub4 = obj2[3].split("title")[1].split(":")[1].split("content")[0];
var sub5 = obj2[4].split("title")[1].split(":")[1].split("content")[0];
var sub6 = obj2[5].split("title")[1].split(":")[1].split("content")[0];
var sub7 = obj2[6].split("title")[1].split(":")[1].split("content")[0];
var sub8 = obj2[7].split("title")[1].split(":")[1].split("content")[0];

var con1 = obj2[0].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con2 = obj2[1].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con3 = obj2[2].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con4 = obj2[3].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con5 = obj2[4].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con6 = obj2[5].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con7 = obj2[6].split("content")[1].split(":")[1].split("thumbnailImage")[0];
var con8 = obj2[7].split("content")[1].split(":")[1].split("thumbnailImage")[0];

result = "브레이킹 뉴스 \n\n1. " +
sub1.slice(0, -2) + "\n" +
con1.slice(0, -2) + "\n\n2. " +
sub2.slice(0, -2) + "\n" +
con2.slice(0, -2) + "\n\n3. " +
sub3.slice(0, -2) + "\n" +
con3.slice(0, -2) + "\n\n4. " +
sub4.slice(0, -2) + "\n" +
con4.slice(0, -2) + "\n\n5. " +
sub5.slice(0, -2) + "\n" +
con5.slice(0, -2) + "\n\n6. " +
sub6.slice(0, -2) + "\n" +
con6.slice(0, -2) + "\n\n7. " +
sub7.slice(0, -2) + "\n" +
con7.slice(0, -2) + "\n\n8. " +
sub8.slice(0, -2) + "\n" +
con8.slice(0, -2) + "\n\n" +
"실기간 이슈 \n1. " +
title1.slice(0, -2) + "\n2. " +
title2.slice(0, -2) + "\n3. " +
title3.slice(0, -2) + "\n4. " +
title4.slice(0, -2) + "\n5. " +
title5.slice(0, -2) + "";
return result.replace("\\", "");
}

function upbit_price(symbol) {
var result = "";
var data = "";

try {
data = Utils.getWebText("https://api.upbit.com/v1/ticker?markets=" + symbol);
} catch (error) {
return "error";
}

var open_price = data.split("opening_price")[1].split(":")[1].split(",")[0];
var high_price = data.split("high_price")[1].split(":")[1].split(",")[0];
var low_price = data.split("low_price")[1].split(":")[1].split(",")[0];
var signed_change_price = data.split("signed_change_price")[1].split(":")[1].split(",")[0];
var signed_change_rate = data.split("signed_change_rate")[1].split(":")[1].split(",")[0];
var change_price = data.split("change_price")[1].split(":")[1].split(",")[0];
var change_rate = data.split("change_rate")[1].split(":")[1].split(",")[0];
var highest_52_week_price = data.split("highest_52_week_price")[1].split(":")[1].split(",")[0];
var highest_52_week_date = data.split("highest_52_week_date")[1].split(":")[1].split(",")[0];
var lowest_52_week_price = data.split("lowest_52_week_price")[1].split(":")[1].split(",")[0];
var lowest_52_week_date = data.split("lowest_52_week_date")[1].split(":")[1].split(",")[0];

var ori_price = data.split("trade_price")[1].split(":")[1].split(",")[0];
var price = ori_price.split(".")[0];
var sotso = ori_price.split(".")[1].slice(0, 4);

var realsotso
if (sotso === "0000") {
realsotso = "";
} else {
if (price.length > 2) {
realsotso = "";
} else {
if (sotso.endsWith('00')) {
sotso = sotso.slice(0, -2);
}
realsotso = "." + sotso;
}
}

var signed = "-";
if (signed_change_rate.startsWith('0')) {
signed = "+";
}

var rate = sotso_calcul(change_rate) * 100;

result = symbol.split("KRW-")[1] + " : " +
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + realsotso + "원\n" +
"변동률 : " + signed + rate.toFixed(2) + "%\n" +
"변동가 : " + signed + sotso_calcul(change_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"52주 최고가 : " + sotso_calcul(highest_52_week_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"52주 최저가 : " + sotso_calcul(lowest_52_week_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\
​__________________________\
\
\
\n" +
"시작가 : " + sotso_calcul(open_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"오늘 최고가 : " + sotso_calcul(high_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"오늘 최저가 : " + sotso_calcul(low_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원\n" +
"52주 최고가 날짜 : " + highest_52_week_date + "\n" +
"52주 최저가 날짜 : " + lowest_52_week_date;

/*+
"\n 어제종가 : " + numberToKorean(data[0].opening_price) +
"\n 등락률 : " + Math.round(data[0].signed_change_rate * 100).toFixed(2) + "%";
*/
return result;
}

function muk(sender) {
var result = "";
var randomidx = Date.now() % mukmenu.length;

result += "[ " + sender + " ]님의\n음식 : ";
result += mukmenu[randomidx];

return result;
}

function codi(sender) {
var result = "";
var outeridx = Date.now() % outerTypes.length;
var topsidx = Date.now() % tops.length;
var bottomsidx = Date.now() % bottoms.length;
var shoesidx = Date.now() % shoes.length;
var accessoriesidx = Date.now() % accessories.length;

result += "[ " + sender + " ]님의\n코디 : ";
result += "\n아웃터 : ";
result += outerTypes[outeridx];
result += "\n상의 : ";
result += tops[topsidx];
result += "\n하의 : ";
result += bottoms[bottomsidx];
result += "\n신발 : ";
result += shoes[shoesidx];
result += "\n악세사리 : ";
result += accessories[accessoriesidx];

return result;
}

function jangse(sender) {
var result = "";

var randomidx = Date.now() % mupho.length;

result += "[ " + sender + " ]님의\n장세세 : ";
result += mupho[randomidx];
return result;
}

function hwanyul()
{
var data = "";

data = Utils.getWebText("https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=1");
var price = data.split("},")[1].split("subValue")[1].split("currencyUnit")[0].split(":")[1];

return "환율 : "+ price.split("원")[0] + "원\"";
}

function weather()
{
var data = "";

data = Utils.getWebText("https://wttr.in/Seoul?format=%C+%t");
return "서울 날씨 : " + data;
}

function domi()
{
var data = "";

data = Utils.getWebText("https://api.coingecko.com/api/v3/global");
var btcdomi = data.split("market_cap_percentage")[1]
.split("btc")[1]
.split("eth")[0]
.split(":")[1];
var ethdomi = data.split("market_cap_percentage")[1]
.split("eth")[1]
.split("usdt")[0]
.split(":")[1];

var usdtdomi = data.split("market_cap_percentage")[1]
.split("usdt")[1]
.split("xrp")[0]
.split(":")[1];

var xrpdomi = data.split("market_cap_percentage")[1]
.split("xrp")[1]
.split("bnb")[0]
.split(":")[1];

var soldomi = data.split("market_cap_percentage")[1]
.split("sol")[1]
.split("usdc")[0]
.split(":")[1];


return "coingeko 기준 참돔 : \n"
+ "비트 도미 : " + parseFloat(btcdomi.replace(/:|,/g, '')).toFixed(2) + "%\n"
+ "이더 도미 : " + parseFloat(ethdomi.replace(/:|,/g, '')).toFixed(2) + "%\n"
+ "테더 도미 : " + parseFloat(usdtdomi.replace(/:|,/g, '')).toFixed(2) + "%\n"
+ "리플 도미 : " + parseFloat(xrpdomi.replace(/:|,/g, '')).toFixed(2) + "%\n"
+ "솔라나 도미 : " + parseFloat(soldomi.replace(/:|,/g, '')).toFixed(2) + "%";
}

function fear()
{
var data = "";

data = Utils.getWebText("https://api.alternative.me/fng/?limit=1");
var value = data.split("value")[1].split(",")[0];
var dgree = data.split("value_classification")[1].split(",")[0];
return "공포 지수 : " + value + "\n"
+ "단계 : " + dgree;
}

function seokwoo() {
var result = "";

result = "준비중..";
return result;
}

function gongpo() {

var res = "";

res = Utils.parse("https://coinpan.com/");

return res;
}

// var check = [];
// let reset;

// function countaddtend(sender) {
// let sw = "";
// sw += ". " + sender;
// check.push(sw);
// return sw;
// }

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
//function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if(msg=="시세"){
var result = "";
//result += "빗썸 시세\n";
//result += bithumb_price("atolo");
result += "Gateio 시세 \n";
result += gate_io_price("ATOLO_USDT");
replier.reply(result);

} else if(msg == "비트등락"){

replier.reply(rate_c("btc"));

} else if(msg == "김프"){

replier.reply(kimp("btc"));

} else if(msg == "장세"){

replier.reply(jangse(sender));

} else if(msg == "바낸"){

replier.reply(binance_full());

} else if(msg == "케이"){

replier.reply(binance());

} else if(msg == "K"){

replier.reply(binance());

} else if(msg == "k"){

replier.reply(binance());

} else if(msg == "E"){

replier.reply(binance_e());

} else if(msg == "e"){

replier.reply(binance_e());

} else if (msg == "이더등락"){

replier.reply(rate_c("eth"));

} else if (msg == "공포지수"){

replier.reply(fear());

} else if (msg == "트럼프"){

replier.reply(rate_c("trump"));

} else if (msg == "솔라나등락"){

replier.reply(rate_c("sol"));

} else if (msg == "리플등락"){

replier.reply(rate_c("xrp"));

} else if (msg == "도지등락"){

replier.reply(rate_c("doge"));

} else if (msg == "나닥"){

replier.reply(nasdaq());

} else if (msg == "날씨"){

replier.reply(weather());

} else if (msg == "엔비디아"){

replier.reply(jongmok("NVDA"));

} else if (msg == "삼전등락"){

replier.reply(jongmok_kr("005930.KS"));

} else if (msg == "애플"){

replier.reply(jongmok("AAPL"));

} else if (msg == "출석") {

// countaddtend(sender);
replier.reply(attendance(sender));

} else if (msg == "석우") {

// countaddtend(sender);
replier.reply(seokwoo());

} else if (msg == "믿") {

// countaddtend(sender);
replier.reply(seokwoo());

}  else if (msg == "받") {

// countaddtend(sender);
replier.reply(seokwoo());

} else if (msg == "목") {

// countaddtend(sender);
replier.reply(seokwoo());

}  else if (msg == "금") {

// countaddtend(sender);
replier.reply(seokwoo());

} else if (msg == "운세") {

// countaddtend(sender);
replier.reply(attendance(sender));

} else if (msg == "올코") {

replier.reply(allco(sender));

} else if (msg == "뭐먹") {

replier.reply(muk(sender));

} else if (msg == "코디") {

replier.reply(codi(sender));

} else if (msg == "퇴근") {

replier.reply("오늘도 수고!");

} else if (msg == "방제") {

var result = "";

result += room + "," + sender;
// result += "[" + sort_test() + "]";

replier.reply(result);

} else if (msg == "상세뉴스") {

replier.reply(coinpan_info());

} else if (msg == "뉴스") {

replier.reply(silsigan());

} else if (msg == "정보") {

replier.reply(choi_sin());

} else if (msg == "도미") {

replier.reply(domi());

} else if (msg == "달러") {

replier.reply(hwanyul());

} else if (msg == "명령어") {

var result = "시세 관련 명령어 : \n\
비트등락, 이더등락, 솔라나등락,\n\
리플등락, 도지등락, 등락\n\
\n\
K, E, 케이, 바낸, 촉,\n\
각 코인 이름, 김프\n\
\n\
정보 관련 명령어 : \n\
뉴스, 상세뉴스, 정보,\n\
나닥, 엔비디아, \n\
삼전등락, 애플, 달러 \n\
\n\
재미관련 명령어 :\n\
장세, 출석, 석우, 운세, 올코,\n\
뭐먹, 퇴근";

replier.reply(result);

} else if (msg == "통") {

var result = "";
var data = "";

result += rate_c("btc");

//result += kimp("btc") + "\n";

result += "\n";

result += gate_io_price("ATOLO_USDT");

result += "\n\n";

result += upbit_all_price();

replier.reply(result);

} else if (msg == "촉") {

var result = "";
/*
result += "비트코인" + upbit_info("KRW-BTC");
result += "\n이더리움" + upbit_info("KRW-ETH");
result += "\n리플 " + upbit_info("KRW-XRP");
result += "\n코스모스" + upbit_info("KRW-ATOM");
result += "\n에이다 " + upbit_info("KRW-ADA");
result += "\n솔라나 " + upbit_info("KRW-SOL");
result += "\n도지코인" + upbit_info("KRW-DOGE");
*/
replier.reply(upbit_all_price());

} else if (msg == "등락") {

var result = "";
/*
result += upbit_rate("KRW-BTC") + " | 비트코인";
result += "\n" + upbit_rate("KRW-ETH") + " | 이더리움";
result += "\n" + upbit_rate("KRW-XRP") + " | 리플";
result += "\n" + upbit_rate("KRW-ATOM") + " | 코스모스";
result += "\n" + upbit_rate("KRW-ADA") + " | 에이다";
result += "\n" + upbit_rate("KRW-SOL") + " | 솔라나";
result += "\n" + upbit_rate("KRW-DOGE") + " | 도지코인";
*/
replier.reply(upbit_all_rate());

} else if(msg == "비트코인"){

replier.reply(upbit_price("KRW-BTC"));

} else if(msg == "이더리움"){

replier.reply(upbit_price("KRW-ETH"));

} else if(msg == "네오"){

replier.reply(upbit_price("KRW-NEO"));

} else if(msg == "메탈"){

replier.reply(upbit_price("KRW-MTL"));

} else if(msg == "리플"){

replier.reply(upbit_price("KRW-XRP"));

} else if(msg == "이더리움클래식"){

replier.reply(upbit_price("KRW-ETC"));

} else if(msg == "스테이터스네트워크토큰"){

replier.reply(upbit_price("KRW-SNT"));

} else if(msg == "웨이브"){

replier.reply(upbit_price("KRW-WAVES"));

} else if(msg == "넴"){

replier.reply(upbit_price("KRW-XEM"));

} else if(msg == "퀀텀"){

replier.reply(upbit_price("KRW-QTUM"));

} else if(msg == "리스크"){

replier.reply(upbit_price("KRW-LSK"));

} else if(msg == "스팀"){

replier.reply(upbit_price("KRW-STEEM"));

} else if(msg == "스텔라루멘"){

replier.reply(upbit_price("KRW-XLM"));

} else if(msg == "아더"){

replier.reply(upbit_price("KRW-ARDR"));

} else if(msg == "아크"){

replier.reply(upbit_price("KRW-ARK"));

} else if(msg == "스토리지"){

replier.reply(upbit_price("KRW-STORJ"));

} else if(msg == "그로스톨코인"){

replier.reply(upbit_price("KRW-GRS"));

} else if(msg == "에이다"){

replier.reply(upbit_price("KRW-ADA"));

} else if(msg == "스팀달러"){

replier.reply(upbit_price("KRW-SBD"));

} else if(msg == "파워렛저"){

replier.reply(upbit_price("KRW-POWR"));

} else if(msg == "비트코인골드"){

replier.reply(upbit_price("KRW-BTG"));

} else if(msg == "아이콘"){

replier.reply(upbit_price("KRW-ICX"));

} else if(msg == "이오스"){

replier.reply(upbit_price("KRW-EOS"));

} else if(msg == "트론"){

replier.reply(upbit_price("KRW-TRX"));

} else if(msg == "시아코인"){

replier.reply(upbit_price("KRW-SC"));

} else if(msg == "온톨로지"){

replier.reply(upbit_price("KRW-ONT"));

} else if(msg == "질리카"){

replier.reply(upbit_price("KRW-ZIL"));

} else if(msg == "폴리매쉬"){

replier.reply(upbit_price("KRW-POLYX"));

} else if(msg == "제로엑스"){

replier.reply(upbit_price("KRW-ZRX"));

} else if(msg == "룸네트워크"){

replier.reply(upbit_price("KRW-LOOM"));

} else if(msg == "비트코인캐시"){

replier.reply(upbit_price("KRW-BCH"));

} else if(msg == "베이직어텐션토큰"){

replier.reply(upbit_price("KRW-BAT"));

} else if(msg == "아이오에스티"){

replier.reply(upbit_price("KRW-IOST"));

} else if(msg == "시빅"){

replier.reply(upbit_price("KRW-CVC"));

} else if(msg == "아이큐"){

replier.reply(upbit_price("KRW-IQ"));

} else if(msg == "아이오타"){

replier.reply(upbit_price("KRW-IOTA"));

} else if(msg == "하이파이"){

replier.reply(upbit_price("KRW-HIFI"));

} else if(msg == "온톨로지가스"){

replier.reply(upbit_price("KRW-ONG"));

} else if(msg == "가스"){

replier.reply(upbit_price("KRW-GAS"));

} else if(msg == "체인바운티"){

replier.reply(upbit_price("KRW-BOUNTY"));

} else if(msg == "엘프"){

replier.reply(upbit_price("KRW-ELF"));

} else if(msg == "카이버네트워크"){

replier.reply(upbit_price("KRW-KNC"));

} else if(msg == "비트코인에스브이"){

replier.reply(upbit_price("KRW-BSV"));

} else if(msg == "쎄타토큰"){

replier.reply(upbit_price("KRW-THETA"));

} else if(msg == "쿼크체인"){

replier.reply(upbit_price("KRW-QKC"));

} else if(msg == "비트토렌트"){

replier.reply(upbit_price("KRW-BTT"));

} else if(msg == "모스코인"){

replier.reply(upbit_price("KRW-MOC"));

} else if(msg == "쎄타퓨엘"){

replier.reply(upbit_price("KRW-TFUEL"));

} else if(msg == "디센트럴랜드"){

replier.reply(upbit_price("KRW-MANA"));

} else if(msg == "앵커"){

replier.reply(upbit_price("KRW-ANKR"));

} else if(msg == "아르고"){

replier.reply(upbit_price("KRW-AERGO"));

} else if(msg == "코스모스"){

replier.reply(upbit_price("KRW-ATOM"));

} else if(msg == "썬더코어"){

replier.reply(upbit_price("KRW-TT"));

} else if(msg == "게임빌드"){

replier.reply(upbit_price("KRW-GAME2"));

} else if(msg == "무비블록"){

replier.reply(upbit_price("KRW-MBL"));

} else if(msg == "왁스"){

replier.reply(upbit_price("KRW-WAXP"));

} else if(msg == "헤데라"){

replier.reply(upbit_price("KRW-HBAR"));

} else if(msg == "메디블록"){

replier.reply(upbit_price("KRW-MED"));

} else if(msg == "밀크"){

replier.reply(upbit_price("KRW-MLK"));

} else if(msg == "에스티피"){

replier.reply(upbit_price("KRW-STPT"));

} else if(msg == "오브스"){

replier.reply(upbit_price("KRW-ORBS"));

} else if(msg == "비체인"){

replier.reply(upbit_price("KRW-VET"));

} else if(msg == "칠리즈"){

replier.reply(upbit_price("KRW-CHZ"));

} else if(msg == "스톰엑스"){

replier.reply(upbit_price("KRW-STMX"));

} else if(msg == "디카르고"){

replier.reply(upbit_price("KRW-DKA"));

} else if(msg == "하이브"){

replier.reply(upbit_price("KRW-HIVE"));

} else if(msg == "카바"){

replier.reply(upbit_price("KRW-KAVA"));

} else if(msg == "아하토큰"){

replier.reply(upbit_price("KRW-AHT"));

} else if(msg == "체인링크"){

replier.reply(upbit_price("KRW-LINK"));

} else if(msg == "테조스"){

replier.reply(upbit_price("KRW-XTZ"));

} else if(msg == "보라"){

replier.reply(upbit_price("KRW-BORA"));

} else if(msg == "저스트"){

replier.reply(upbit_price("KRW-JST"));

} else if(msg == "크로노스"){

replier.reply(upbit_price("KRW-CRO"));

} else if(msg == "토카막네트워크"){

replier.reply(upbit_price("KRW-TOKAMAK"));

} else if(msg == "솔라"){

replier.reply(upbit_price("KRW-SXP"));

} else if(msg == "헌트"){

replier.reply(upbit_price("KRW-HUNT"));

} else if(msg == "폴카닷"){

replier.reply(upbit_price("KRW-DOT"));

} else if(msg == "엠블"){

replier.reply(upbit_price("KRW-MVL"));

} else if(msg == "스트라티스"){

replier.reply(upbit_price("KRW-STRAX"));

} else if(msg == "알파쿼크"){

replier.reply(upbit_price("KRW-AQT"));

} else if(msg == "골렘"){

replier.reply(upbit_price("KRW-GLM"));

} else if(msg == "메타디움"){

replier.reply(upbit_price("KRW-META"));

} else if(msg == "피르마체인"){

replier.reply(upbit_price("KRW-FCT2"));

} else if(msg == "코박토큰"){

replier.reply(upbit_price("KRW-CBK"));

} else if(msg == "샌드박스"){

replier.reply(upbit_price("KRW-SAND"));

} else if(msg == "히포크랏"){

replier.reply(upbit_price("KRW-HPO"));

} else if(msg == "도지코인"){

replier.reply(upbit_price("KRW-DOGE"));

} else if(msg == "스트라이크"){

replier.reply(upbit_price("KRW-STRIKE"));

} else if(msg == "펀디엑스"){

replier.reply(upbit_price("KRW-PUNDIX"));

} else if(msg == "플로우"){

replier.reply(upbit_price("KRW-FLOW"));

} else if(msg == "엑시인피니티"){

replier.reply(upbit_price("KRW-AXS"));

} else if(msg == "스택스"){

replier.reply(upbit_price("KRW-STX"));

} else if(msg == "이캐시"){

replier.reply(upbit_price("KRW-XEC"));

} else if(msg == "솔라나"){

replier.reply(upbit_price("KRW-SOL"));

} else if(msg == "폴리곤에코시스템토큰"){

replier.reply(upbit_price("KRW-POL"));

} else if(msg == "에이브"){

replier.reply(upbit_price("KRW-AAVE"));

} else if(msg == "1인치네트워크"){

replier.reply(upbit_price("KRW-1INCH"));

} else if(msg == "알고랜드"){

replier.reply(upbit_price("KRW-ALGO"));

} else if(msg == "니어프로토콜"){

replier.reply(upbit_price("KRW-NEAR"));

} else if(msg == "아발란체"){

replier.reply(upbit_price("KRW-AVAX"));

} else if(msg == "쓰레스홀드"){

replier.reply(upbit_price("KRW-T"));

} else if(msg == "셀로"){

replier.reply(upbit_price("KRW-CELO"));

} else if(msg == "스테픈"){

replier.reply(upbit_price("KRW-GMT"));

} else if(msg == "앱토스"){

replier.reply(upbit_price("KRW-APT"));

} else if(msg == "시바이누"){

replier.reply(upbit_price("KRW-SHIB"));

} else if(msg == "마스크네트워크"){

replier.reply(upbit_price("KRW-MASK"));

} else if(msg == "아비트럼"){

replier.reply(upbit_price("KRW-ARB"));

} else if(msg == "멀티버스엑스"){

replier.reply(upbit_price("KRW-EGLD"));

} else if(msg == "수이"){

replier.reply(upbit_price("KRW-SUI"));

} else if(msg == "더그래프"){

replier.reply(upbit_price("KRW-GRT"));

} else if(msg == "블러"){

replier.reply(upbit_price("KRW-BLUR"));

} else if(msg == "이뮤터블엑스"){

replier.reply(upbit_price("KRW-IMX"));

} else if(msg == "세이"){

replier.reply(upbit_price("KRW-SEI"));

} else if(msg == "미나"){

replier.reply(upbit_price("KRW-MINA"));

} else if(msg == "크레딧코인"){

replier.reply(upbit_price("KRW-CTC"));

} else if(msg == "아스타"){

replier.reply(upbit_price("KRW-ASTR"));

} else if(msg == "스페이스아이디"){

replier.reply(upbit_price("KRW-ID"));

} else if(msg == "피스네트워크"){

replier.reply(upbit_price("KRW-PYTH"));

} else if(msg == "맨틀"){

replier.reply(upbit_price("KRW-MNT"));

} else if(msg == "아카시네트워크"){

replier.reply(upbit_price("KRW-AKT"));

} else if(msg == "제타체인"){

replier.reply(upbit_price("KRW-ZETA"));

} else if(msg == "바운스토큰"){

replier.reply(upbit_price("KRW-AUCTION"));

} else if(msg == "스타게이트파이낸스"){

replier.reply(upbit_price("KRW-STG"));

} else if(msg == "빔"){

replier.reply(upbit_price("KRW-BEAM"));

} else if(msg == "타이코"){

replier.reply(upbit_price("KRW-TAIKO"));

} else if(msg == "테더"){

replier.reply(upbit_price("KRW-USDT"));

} else if(msg == "온도파이낸스"){

replier.reply(upbit_price("KRW-ONDO"));

} else if(msg == "레이어제로"){

replier.reply(upbit_price("KRW-ZRO"));

} else if(msg == "블라스트"){

replier.reply(upbit_price("KRW-BLAST"));

} else if(msg == "주피터"){

replier.reply(upbit_price("KRW-JUP"));

} else if(msg == "이더리움네임서비스"){

replier.reply(upbit_price("KRW-ENS"));

} else if(msg == "그래비티"){

replier.reply(upbit_price("KRW-G"));

} else if(msg == "펜들"){

replier.reply(upbit_price("KRW-PENDLE"));

} else if(msg == "에이셔"){

replier.reply(upbit_price("KRW-ATH"));

} else if(msg == "유에스디코인"){

replier.reply(upbit_price("KRW-USDC"));

} else if(msg == "유엑스링크"){

replier.reply(upbit_price("KRW-UXLINK"));

} else if(msg == "빅타임"){

replier.reply(upbit_price("KRW-BIGTIME"));

} else if(msg == "너보스"){

replier.reply(upbit_price("KRW-CKB"));

} else if(msg == "웜홀"){

replier.reply(upbit_price("KRW-W"));

} else if(msg == "카브"){

replier.reply(upbit_price("KRW-CARV"));

} else if(msg == "인젝티브"){

replier.reply(upbit_price("KRW-INJ"));

} else if(msg == "캣인어독스월드"){

replier.reply(upbit_price("KRW-MEW"));

} else if(msg == "유니스왑"){

replier.reply(upbit_price("KRW-UNI"));

} else if(msg == "세이프"){

replier.reply(upbit_price("KRW-SAFE"));

} else if(msg == "드리프트"){

replier.reply(upbit_price("KRW-DRIFT"));

} else if(msg == "어드벤처골드"){

replier.reply(upbit_price("KRW-AGLD"));

} else if(msg == "페페"){

replier.reply(upbit_price("KRW-PEPE"));

} else if(msg == "봉크"){

replier.reply(upbit_price("KRW-BONK"));

} else if(msg == "렌더토큰"){

replier.reply(upbit_price("KRW-RENDER"));

} else if(msg == "무브먼트"){

replier.reply(upbit_price("KRW-MOVE"));

} else if(msg == "매직에덴"){

replier.reply(upbit_price("KRW-ME"));

} else if(msg == "모카버스"){

replier.reply(upbit_price("KRW-MOCA"));

} else if(msg == "바나"){

replier.reply(upbit_price("KRW-VANA"));

} else if(msg == "소닉SVM"){

replier.reply(upbit_price("KRW-SONIC"));

}

}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
var textView = new android.widget.TextView(activity);
textView.setText("Hello, World!");
textView.setTextColor(android.graphics.Color.DKGRAY);
activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}
