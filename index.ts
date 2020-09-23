"use strict";

/**
 * gestaltSimilarity finds the gestalt similarity between two strings
 * @param first The first string to check
 * @param second The second string to check
 * @returns The gestalt similarity coefficient
 */
export default function gestaltSimilarity(first : string, second : string) : number {
    let stack : Array<string> = [first, second];
    let score = 0;
    
    while(stack.length != 0) {
        const first_sub_string = stack.pop()!;
        const second_sub_string = stack.pop()!;
        
        let longest_sequence_length = 0;
        let longest_sequence_index_1 = -1;
        let longest_sequence_index_2 = -1;

        for(let i = 0; i < first_sub_string.length; i++) {
            for(let j = 0; j < second_sub_string.length; j++) {
                let k = 0;
                while(i+k < first_sub_string.length && j+k < second_sub_string.length && first_sub_string.charAt(i+k) === second_sub_string.charAt(j+k)) {
                    k++;
                }
                if(k > longest_sequence_length) {
                    longest_sequence_length = k;
                    longest_sequence_index_1 = i;
                    longest_sequence_index_2 = j;
                }
            }
        }
    
        if(longest_sequence_length > 0) {
            score += longest_sequence_length * 2;
            if(longest_sequence_index_1 !== 0 && longest_sequence_index_2 !== 0) {
                stack.push(first_sub_string.substring(0, longest_sequence_index_1));
                stack.push(second_sub_string.substring(0, longest_sequence_index_2));
            }
            if(longest_sequence_index_1 + longest_sequence_length !== first_sub_string.length && 
                longest_sequence_index_2 + longest_sequence_length !== second_sub_string.length) {
                stack.push(first_sub_string.substring(longest_sequence_index_1 + longest_sequence_length, first_sub_string.length));
                stack.push(second_sub_string.substring(longest_sequence_index_2 + longest_sequence_length, second_sub_string.length));
            }
        }
    }
    
    return score / (first.length + second.length);
}
