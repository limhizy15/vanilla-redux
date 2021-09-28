# Vanilla Redux

- nomad coder lecture

## Store

- Data를 넣어두는 곳
  - `getState()`로 데이터를 출력할 수 있음
- reducer (함수 형태)를 매개변수로 받아야한다
  - 이 함수가 데이터를 변형시켜서 리턴해줘요
- action : reducer와 소통하는 방법이래.. 어떤 걸 하라고 알려주는 역할인가봐. 무조건 object형태여야함
  - `store.dispatch()`로 액션을 전달
- `subscribe`: change를 들을 수 있도록 해준다. store에 있는 data가 변하면 콜백함수를 호출

## React-Redux

- Get state from store! => connect()!!!! : connect components to store
  - mapStateToProps, mapDispatchToProps를 매개변수로
- mapStateToProps : store의 state를 props로 전달
