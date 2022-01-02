<form action="{{ url('register') }}" method="post">
    @csrf
    <input type="text" name="inputName" placeholder="新メンバー入力">
    <input type="submit" value="登録">
</form>
