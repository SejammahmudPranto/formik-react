export default function SumitComp() {
    return (
        <div>
            <h1>ID:Pass generator</h1>
            <form>
                <label htmlFor="ID" className="form-control">ID</label>
                <input type="text" id="ID" name="ID" disabled></input>

                <label htmlFor="Password" className="form-control">Password</label>
                <input type="text" id="Password" name="Password" disabled></input>

                <button type="button" className="button2" >Generate!</button>
            </form>
        </div>
    )
}