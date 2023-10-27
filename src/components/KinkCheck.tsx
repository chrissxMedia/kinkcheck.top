import { kinks } from "../base";
import Rater from "./Rater";

export default function KinkCheck() {
    return <main>
        {
            Object.entries(kinks).map(([cat, kinks]) => (
                <div class="category">
                    <h2>{cat}</h2>
                    <table rules="rows">
                        <tbody>
                            {kinks.map(([kink, positions]) => (
                                <tr>
                                    <td>{kink}</td>
                                    {positions.map((pos) => (
                                        <td>
                                            <Rater text={pos} />
                                        </td>
                                    ))}
                                    {positions.length === 1 ? (
                                        <td />
                                    ) : undefined}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))
        }
    </main>
}
