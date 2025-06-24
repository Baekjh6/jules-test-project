const questions = [
    // E (외향) / I (내향) 지표 질문
    {
        q: "주말에 약속이 없으면 무엇을 하고 싶은가요?",
        type: "EI", // 영향을 주는 MBTI 지표
        choices: [
            { text: "친구들과 만나 즐거운 시간을 보낸다.", value: "E" },
            { text: "집에서 혼자 조용히 쉬거나 취미 생활을 한다.", value: "I" }
        ]
    },
    {
        q: "낯선 사람들과 함께 있는 새로운 환경에서 당신은?",
        type: "EI",
        choices: [
            { text: "먼저 다가가 대화를 시작하는 편이다.", value: "E" },
            { text: "상대방이 다가오기를 기다리거나 관찰하는 편이다.", value: "I" }
        ]
    },
    {
        q: "에너지를 얻는 방식은?",
        type: "EI",
        choices: [
            { text: "사람들과의 교류를 통해 에너지를 얻는다.", value: "E" },
            { text: "혼자만의 시간을 통해 에너지를 충전한다.", value: "I" }
        ]
    },

    // S (감각) / N (직관) 지표 질문
    {
        q: "새로운 정보를 접할 때 당신은?",
        type: "SN",
        choices: [
            { text: "구체적이고 사실적인 정보에 집중한다.", value: "S" },
            { text: "정보 뒤에 숨겨진 의미나 가능성을 탐색한다.", value: "N" }
        ]
    },
    {
        q: "문제 해결에 있어서 당신의 접근 방식은?",
        type: "SN",
        choices: [
            { text: "현재 상황을 분석하고 경험을 바탕으로 해결한다.", value: "S" },
            { text: "다양한 아이디어를 떠올리고 미래의 가능성을 고려한다.", value: "N" }
        ]
    },
    {
        q: "일상생활에서 기억을 할 때 주로 무엇을 기억하는가?",
        type: "SN",
        choices: [
            { text: "실제 일어난 세부적인 사건과 모습들", value: "S" },
            { text: "사건의 전반적인 의미나 패턴, 그리고 연결고리", value: "N" }
        ]
    },

    // T (사고) / F (감정) 지표 질문
    {
        q: "중요한 결정을 내릴 때 당신의 우선순위는?",
        type: "TF",
        choices: [
            { text: "논리적이고 객관적인 사실과 원칙", value: "T" },
            { text: "사람들의 감정과 조화로운 관계", value: "F" }
        ]
    },
    {
        q: "친구의 고민을 들었을 때 당신의 반응은?",
        type: "TF",
        choices: [
            { text: "문제를 분석하고 해결책을 제시하려 한다.", value: "T" },
            { text: "공감하고 감정을 이해하려 노력한다.", value: "F" }
        ]
    },
    {
        q: "칭찬을 받거나 비판을 들었을 때 당신은?",
        type: "TF",
        choices: [
            { text: "내 행동이나 논리에 대한 피드백으로 받아들인다.", value: "T" },
            { text: "상대방의 의도나 감정을 먼저 고려한다.", value: "F" }
        ]
    },

    // J (판단) / P (인식) 지표 질문
    {
        q: "여행 계획을 세울 때 당신은?",
        type: "JP",
        choices: [
            { text: "세부적인 계획을 미리 세우고 그대로 따른다.", value: "J" },
            { text: "대략적인 방향만 정하고 즉흥적인 변화를 즐긴다.", value: "P" }
        ]
    },
    {
        q: "마감 기한이 있는 프로젝트를 진행할 때 당신은?",
        type: "JP",
        choices: [
            { text: "미리 계획하고 체계적으로 진행하여 마감 전에 끝낸다.", value: "J" },
            { text: "유연하게 접근하며 마감에 임박해서 집중하는 편이다.", value: "P" }
        ]
    },
    {
        q: "방이나 책상을 정리할 때 당신은?",
        type: "JP",
        choices: [
            { text: "정돈되고 질서 있게 유지하는 것을 선호한다.", value: "J" },
            { text: "필요할 때 찾을 수 있도록 대략적으로 배치한다.", value: "P" }
        ]
    }
];

const mbtiDescriptions = {
    "ISTJ": "책임감이 강하고 현실적인 타입. \"세상의 소금형\"",
    "ISFJ": "헌신적이고 섬세하며 타인을 돕는 것을 즐기는 타입. \"임금 뒷편의 권력형\"",
    "INFJ": "통찰력이 뛰어나고 이상을 추구하는 타입. \"예언자형\"",
    "INTJ": "독립적이고 분석적이며 비전을 가진 전략가 타입. \"과학자형\"",
    "ISTP": "논리적이고 실용적이며 문제 해결에 능숙한 타입. \"백과사전형\"",
    "ISFP": "따뜻하고 겸손하며 현재를 즐기는 예술가 타입. \"성인군자형\"",
    "INFP": "이상적이고 낭만적이며 타인에게 깊이 공감하는 타입. \"잔다르크형\"",
    "INTP": "지적 호기심이 강하고 논리적인 사색가 타입. \"아이디어뱅크형\"",
    "ESTP": "모험을 즐기고 현실적인 문제 해결에 뛰어난 타입. \"수완좋은 활동가형\"",
    "ESFP": "사교적이고 활동적이며 분위기를 주도하는 타입. \"사교적인 유형\"",
    "ENFP": "열정적이고 창의적이며 사람들과의 관계를 중시하는 타입. \"스파크형\"",
    "ENTP": "도전적이고 혁신적이며 논쟁을 즐기는 발명가 타입. \"발명가형\"",
    "ESTJ": "체계적이고 현실적이며 리더십이 뛰어난 타입. \"사업가형\"",
    "ESFJ": "친절하고 사교적이며 타인을 돕는 것을 좋아하는 타입. \"친선도모형\"",
    "ENFJ": "카리스마 있고 사람들을 이끄는 데 능숙한 타입. \"언변능숙형\"",
    "ENTJ": "결단력 있고 통솔력이 뛰어나며 목표 지향적인 타입. \"지도자형\""
};

const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container'); // 결과 컨테이너 추가
let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none'; // 결과창 숨기기
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <h3>${questionData.q}</h3>
            <form id="quiz-form">
                ${questionData.choices.map((choice, index) => `
                    <div>
                        <input type="radio" name="choice" id="choice${index}" value="${choice.value}" required>
                        <label for="choice${index}">${choice.text}</label>
                    </div>
                `).join('')}
                <button type="submit">다음</button>
            </form>
        `;
        document.getElementById('quiz-form').addEventListener('submit', nextQuestion);
    } else {
        showResult();
    }
}

function nextQuestion(event) {
    event.preventDefault();
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const answerValue = selectedChoice.value;
        scores[answerValue]++;
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("답변을 선택해주세요.");
    }
}

function calculateMBTIResult() {
    let result = "";
    result += scores.E >= scores.I ? "E" : "I"; // 동점일 경우 E (임의)
    result += scores.S >= scores.N ? "S" : "N"; // 동점일 경우 S (임의)
    result += scores.T >= scores.F ? "T" : "F"; // 동점일 경우 T (임의)
    result += scores.J >= scores.P ? "J" : "P"; // 동점일 경우 J (임의)
    return result;
}

function showResult() {
    quizContainer.style.display = 'none'; // 퀴즈 컨테이너 숨기기
    resultContainer.style.display = 'block'; // 결과 컨테이너 표시

    const mbtiResult = calculateMBTIResult();
    const description = mbtiDescriptions[mbtiResult] || "결과 설명을 찾을 수 없습니다.";

    resultContainer.innerHTML = `
        <h2>당신의 MBTI 결과는: ${mbtiResult}</h2>
        <p>${description}</p>
        <p>점수: E(${scores.E}) I(${scores.I}) | S(${scores.S}) N(${scores.N}) | T(${scores.T}) F(${scores.F}) | J(${scores.J}) P(${scores.P})</p>
        <button onclick="restartQuiz()">테스트 다시 시작</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultContainer.style.display = 'none'; // 결과 컨테이너 숨기기
    quizContainer.style.display = 'none'; // 퀴즈 컨테이너도 숨김 (startQuiz에서 다시 표시)
    startBtn.style.display = 'inline-block'; // 시작 버튼 다시 표시
}
