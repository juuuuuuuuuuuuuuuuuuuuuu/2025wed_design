function startLoading() {
  const id = document.getElementById('sidinput').value.trim();

  if (!/^\d{5}$/.test(id)) {
    alert("학번 5자리 숫자를 정확히 입력해주세요 (예: 20720)");
    return;
  }

  const grade = id.charAt(0);
  if (!['1', '2', '3'].includes(grade)) {
    document.getElementById('inputs').classList.add('shidden');
    document.getElementById('errors').classList.remove('shidden');
    return;
  }

  document.getElementById('inputs').classList.add('shidden');
  document.getElementById('loadings').classList.remove('shidden');

  setTimeout(() => {
    document.getElementById('loadings').classList.add('shidden');
    document.getElementById('outputs').classList.remove('shidden');

    showStudentNoticein(id);
  }, 1500);
}

function showStudentNoticein(id) {
  const gradeDigit = id.charAt(0);
  const classNum = id.slice(1, 3);
  const studentNum = id.slice(3, 5);
  const name = "홍길동"; // 고정 이름

  const gradeTab = document.getElementById('grades');
  const folder = document.getElementById('folderBox');
  const noticeinBox = folder.querySelector('.noticein');

  if (gradeDigit === '3') {
    gradeTab.textContent = "3학년";
    gradeTab.style.backgroundColor = '#1e40af';
    folder.style.borderColor = '#1e40af';
    gradeTab.style.color = '#fff';
  } else if (gradeDigit === '2') {
    gradeTab.textContent = "2학년";
    gradeTab.style.backgroundColor = '#c2410c';
    folder.style.borderColor = '#c2410c';
    gradeTab.style.color = '#fff';
  } else if (gradeDigit === '1') {
    gradeTab.textContent = "1학년";
    gradeTab.style.backgroundColor = '#f1f5f9';
    folder.style.borderColor = '#94a3b8';
    gradeTab.style.color = '#000';
  }

  noticeinBox.innerHTML = `
    <p><strong>이름:</strong> ${name}</p>
    <p><strong>학년:</strong> ${gradeDigit}학년</p>
    <p><strong>반:</strong> ${parseInt(classNum, 10)}반</p>
    <p><strong>번호:</strong> ${parseInt(studentNum, 10)}번</p>
  `;
}

function goBack() {
  document.getElementById('outputs').classList.add('shidden');
  document.getElementById('inputs').classList.remove('shidden');
  document.getElementById('sidinput').value = '';
}

function goBackFromError() {
  document.getElementById('errors').classList.add('shidden');
  document.getElementById('inputs').classList.remove('shidden');
  document.getElementById('sidinput').value = '';
}
